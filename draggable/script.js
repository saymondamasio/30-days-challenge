  const itemsDraggable = document.querySelectorAll('.list-dropzone .item')
  const listsDropzone = document.querySelectorAll('.list-dropzone')

  
  function handleDragStart(e) {
    console.log('handleDragStart', e.target)

    this.classList.add('dragging')

    // const clone = element.cloneNode(true)

    // document.body.appendChild(clone)

    // e.dataTransfer.setDragImage(clone, 0, 0);

    listsDropzone.forEach(listDropzone => {
      listDropzone.classList.add('highlight')
    })
  }
  
  function handleDragEnd(e) {
    console.log('handleDragEnd')

    this.classList.remove('dragging')
    
    listsDropzone.forEach(listDropzone => {
      listDropzone.classList.remove('highlight')
    })
  }

  function handleDrag(e) {
    console.log('handleDrag')
  }
  
  itemsDraggable.forEach(item => {
    // O elemento começou a ser arrastado
    item.addEventListener('dragstart', handleDragStart)
    // O elemento terminou de ser arrastado
    item.addEventListener('dragend', handleDragEnd)
    // O elemento esta sendo arrastando
    item.addEventListener('drag', handleDrag)    
  })

  function handleDragLeave(e) {
    console.log('handleDragLeave')

    
    this.classList.remove('over')
  }

  function handleDragOver(e) {
    console.log('handleDragOver')

    this.classList.add('over')

    const elementBeingDragged = document.querySelector('.dragging')

    const applyAfter = getNewPosition(this, e.clientX, e.clientY)

    console.log(applyAfter)

    if(applyAfter) {
      applyAfter.insertAdjacentElement('afterend', elementBeingDragged)
    } else {
      this.prepend(elementBeingDragged)
    }
  }

  function getNewPosition(element, positX, positY) {
    console.log(positY)
    const itemsNotDraggable = element.querySelectorAll('.item:not(.dragging)')

    let result;

    for(let itemNotDraggable of itemsNotDraggable) {
      const box = itemNotDraggable.getBoundingClientRect()
      const boxCenterY = box.y + box.height / 2
      const boxCenterX = box.x + box.width / 2

      console.log({
        box: {
          boxCenterX,
          boxCenterY
        },
        positX,
        positY
      })

      if(positX > box.right && positX < box.right && positY > box.top && positY < box.bottom) result = itemNotDraggable
    }

    return result
  }

  function handleDrop(e) {
    console.log('handleDrop')
  }

  function handleDragEnter(e) {
    console.log('handleDragEnter')

    return false
  }

  listsDropzone.forEach(listDropzone => {
    // Entrou na zona de alvo
    listDropzone.addEventListener('dragenter', handleDragEnter)
    // Esta em cima da zona de alvo
    listDropzone.addEventListener('dragover', handleDragOver)
    // Saiu da zona de alvo
    listDropzone.addEventListener('dragleave', handleDragLeave)
    // Foi solto na zona de alvo
    listDropzone.addEventListener('drop', handleDrop)
  })
