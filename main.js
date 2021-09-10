class Modal {
            constructor() {
                this.modal = document.querySelector(".hidden-box")
            }

            open() {
                this.modal.style.display = 'initial'
            }

            close() {
                this.modal.style.display = 'none'
            }

        }

        const openBtn = document.querySelector(".js-open-modal")
        const closeBtn = document.querySelector(".js-close-modal")
        const modal = new Modal()
      
        openBtn.addEventListener('click', function(event) {
            modal.open()
        })

        closeBtn.addEventListener('click', function(event) {
            modal.close()
        })