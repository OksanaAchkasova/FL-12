const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createFileTree(structure, node) {
  const mainTree = document.createElement('ul');
  node.appendChild(mainTree);

  for (let elem of structure) {
    const listItem = document.createElement('li');
    mainTree.appendChild(listItem);
    const el = document.createElement('div');
    el.classList.add('item');
    listItem.appendChild(el);

    if (mainTree.parentNode !== rootNode) {
      mainTree.classList.add('hidden');
    }

    if (elem.folder) {
      listItem.classList.add('folder');
      const icon = document.createElement('i');
      icon.classList.add('material-icons', 'folder');
      icon.appendChild(document.createTextNode('folder'));
      el.appendChild(icon);
      el.appendChild(document.createTextNode(elem.title));

      el.addEventListener('click', function () {
        el.nextSibling.classList.toggle('shown');
        let iconText = el.firstChild.textContent;
        if (iconText === 'folder') {
          el.firstChild.textContent = 'folder_open';
        } else {
          el.firstChild.textContent = 'folder';
        }
      });

      if(elem.children) {
        createFileTree(elem.children, listItem);
      } else {
        const empty = document.createElement('div');
        empty.classList.add('empty-folder', 'hidden');
        empty.textContent = 'Folder is empty';
        listItem.appendChild(empty);
      }
    } else {
      listItem.classList.add('file');
      let icon = document.createElement('i');
      icon.classList.add('material-icons', 'file');
      icon.appendChild(document.createTextNode('insert_drive_file'));
      el.appendChild(icon);
      el.appendChild(document.createTextNode(elem.title));
    }
  }
}

createFileTree(structure, rootNode);
