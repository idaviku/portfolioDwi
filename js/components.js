
export class galleryRepos extends HTMLElement{
  // constructor(){
  //   super()
  // }
  connectedCallback(){
    console.log("elemento personalizado agregado")
    // this.attachShadow({mode:"open"})
    // try {
    //   if (data) {
    //     this.shadowRoot.innerHTML=`${data}`
    //     // this.shadowRoot.appendChild(data)
    //     console.log(data)
    //     console.log(this.shadowRoot)
    //     console.log("en callback "+data.isConnected)
    //   } else {
    //     this.shadowRoot.innerHTML=`${data}`
    //   }
    // } catch (error) {
    //   console.log(`esperando...${error}`)  
    // }
}
  // attributeChangedCallback(attr, oldValue, newValue){
  //   console.log("elemento personalizado modificado")
  //   this.renderGallery(this)
  // }
  disconnectedCallback(){
    console.log("elemento eliminado")
  }
  render(){
    const imgtest=document.createElement("img")
    imgtest.src="https://media.tenor.com/Z5pKcy5SRZsAAAAe/lisa-simpsons-suplicar.png"
    return imgtest
    /* const renderdom = this.renderGallery()
    console.log(renderdom)
    return renderdom */
  }
  renderGallery(data) {
    const gallery = document.createElement('div');
    gallery.classList.add('porfolio__gallery')
    data.forEach(project => {
      const anchorItem = document.createElement('a');
      
      const projectItem = document.createElement('div');
      projectItem.classList.add('porfolio__gallery__item');
      
      const image = document.createElement('img');
      image.classList.add('img__portfolio__item');
      image.setAttribute('src', project.owner.avatar_url);
      image.setAttribute('alt', project.owner.login);
      
      const title = document.createElement('h3');
      title.textContent = project.name;
      
      const category = document.createElement('span');
      category.classList.add('porfolio__category')
      category.textContent = project.language;
      
      const description = document.createElement('p');
      description.textContent = project.description;
      
      anchorItem.appendChild(projectItem)
      projectItem.appendChild(image);
      projectItem.appendChild(title);
      projectItem.appendChild(category);
      projectItem.appendChild(description);
      gallery.appendChild(anchorItem);

    });
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild(gallery)
    console.log(gallery.isConnected)
    // this.connectedCallback()
    // console.log(gallery)
  }  
}
customElements.define("gallery-repos",galleryRepos)