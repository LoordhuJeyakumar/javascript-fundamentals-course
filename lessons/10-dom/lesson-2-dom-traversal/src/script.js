document.addEventListener('DOMContentLoaded', () => {
    // Utility function to display node information
    function getNodeInfo(node) {
        return {
            nodeType: node.nodeType,
            nodeName: node.nodeName,
            nodeValue: node.nodeValue,
            textContent: node.textContent,
            childNodes: node.childNodes.length,
            children: node.children ? node.children.length : 0,
            hasParentNode: !!node.parentNode,
            hasParentElement: !!node.parentElement,
            firstChild: node.firstChild ? node.firstChild.nodeName : null,
            firstElementChild: node.firstElementChild ? node.firstElementChild.nodeName : null,
            previousSibling: node.previousSibling ? node.previousSibling.nodeName : null,
            nextSibling: node.nextSibling ? node.nextSibling.nodeName : null
        };
    }

    // Tree Navigation Demo
    const familyTree = document.getElementById('familyTree');
    const nodeInfo = document.getElementById('nodeInfo').querySelector('pre');
    let selectedNode = null;

    familyTree.addEventListener('click', (e) => {
        const node = e.target.closest('.node');
        if (!node) return;

        // Clear previous selection
        if (selectedNode) {
            selectedNode.classList.remove('highlighted');
        }

        selectedNode = node;
        node.classList.add('highlighted');
        nodeInfo.textContent = JSON.stringify(getNodeInfo(node), null, 2);
    });

    // Parent, Children, and Siblings highlighting
    document.getElementById('highlightParent').addEventListener('click', () => {
        if (!selectedNode) return;
        
        const parent = selectedNode.parentElement.closest('.node');
        if (parent) {
            selectedNode.classList.remove('highlighted');
            parent.classList.add('highlighted');
            selectedNode = parent;
            nodeInfo.textContent = JSON.stringify(getNodeInfo(parent), null, 2);
        }
    });

    document.getElementById('highlightChildren').addEventListener('click', () => {
        if (!selectedNode) return;

        const children = selectedNode.querySelectorAll(':scope > .children > .node');
        selectedNode.classList.remove('highlighted');
        children.forEach(child => child.classList.add('highlighted'));
    });

    document.getElementById('highlightSiblings').addEventListener('click', () => {
        if (!selectedNode) return;

        const parent = selectedNode.parentElement;
        const siblings = Array.from(parent.children).filter(
            child => child.classList.contains('node') && child !== selectedNode
        );
        
        selectedNode.classList.remove('highlighted');
        siblings.forEach(sibling => sibling.classList.add('highlighted'));
    });

    // Node Types Demo
    const nodeTypesContainer = document.querySelector('.node-types-container');
    const nodeTypeInfo = document.getElementById('nodeTypeInfo');

    function analyzeNodeTypes(element) {
        const nodes = Array.from(element.childNodes);
        return nodes.map(node => {
            const type = node.nodeType === 1 ? 'ELEMENT_NODE' :
                        node.nodeType === 3 ? 'TEXT_NODE' :
                        node.nodeType === 8 ? 'COMMENT_NODE' : 'OTHER';
            return {
                type,
                nodeName: node.nodeName,
                content: node.nodeType === 3 ? node.textContent.trim() : null
            };
        }).filter(info => info.type === 'ELEMENT_NODE' || 
                         (info.type === 'TEXT_NODE' && info.content));
    }

    nodeTypesContainer.addEventListener('click', () => {
        const analysis = analyzeNodeTypes(nodeTypesContainer);
        nodeTypeInfo.innerHTML = analysis.map(node => `
            <div class="node-type-info">
                <strong>${node.type}</strong>: ${node.nodeName}
                ${node.content ? `<br>Content: "${node.content}"` : ''}
            </div>
        `).join('');
    });

    // Dynamic List Navigation
    const dynamicList = document.getElementById('dynamicList');
    let selectedListItem = null;

    dynamicList.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;

        if (selectedListItem) {
            selectedListItem.classList.remove('selected');
        }
        selectedListItem = li;
        li.classList.add('selected');
    });

    // Add new item
    document.getElementById('addItem').addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        
        if (selectedListItem) {
            const parent = selectedListItem.closest('ul');
            parent.insertBefore(newItem, selectedListItem.nextSibling);
        } else {
            dynamicList.appendChild(newItem);
        }
    });

    // Move item up
    document.getElementById('moveUp').addEventListener('click', () => {
        if (!selectedListItem) return;
        const previousSibling = selectedListItem.previousElementSibling;
        if (previousSibling) {
            selectedListItem.parentNode.insertBefore(selectedListItem, previousSibling);
        }
    });

    // Move item down
    document.getElementById('moveDown').addEventListener('click', () => {
        if (!selectedListItem) return;
        const nextSibling = selectedListItem.nextElementSibling;
        if (nextSibling) {
            selectedListItem.parentNode.insertBefore(nextSibling, selectedListItem);
        }
    });

    // Indent item
    document.getElementById('indent').addEventListener('click', () => {
        if (!selectedListItem) return;
        const previousSibling = selectedListItem.previousElementSibling;
        if (previousSibling) {
            let ul = previousSibling.querySelector('ul');
            if (!ul) {
                ul = document.createElement('ul');
                previousSibling.appendChild(ul);
            }
            ul.appendChild(selectedListItem);
        }
    });

    // Outdent item
    document.getElementById('outdent').addEventListener('click', () => {
        if (!selectedListItem) return;
        const parentLi = selectedListItem.parentNode.closest('li');
        if (parentLi) {
            parentLi.parentNode.insertBefore(selectedListItem, parentLi.nextSibling);
        }
    });

    // Practice Exercise
    const elementInspector = document.getElementById('elementInspector');
    const inspectorOutput = document.getElementById('inspectorOutput').querySelector('pre');

    elementInspector.addEventListener('click', (e) => {
        const element = e.target;
        if (element === elementInspector) return;

        const info = {
            element: element.tagName,
            parent: element.parentElement ? element.parentElement.tagName : null,
            children: Array.from(element.children).map(child => child.tagName),
            siblings: Array.from(element.parentElement.children)
                .filter(sibling => sibling !== element)
                .map(sibling => sibling.tagName),
            attributes: Array.from(element.attributes).map(attr => ({
                name: attr.name,
                value: attr.value
            }))
        };

        inspectorOutput.textContent = JSON.stringify(info, null, 2);
        
        // Highlight the selected element
        const previouslyHighlighted = elementInspector.querySelector('.highlighted');
        if (previouslyHighlighted) {
            previouslyHighlighted.classList.remove('highlighted');
        }
        element.classList.add('highlighted');
    });
});