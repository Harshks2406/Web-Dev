let navlinks  = $('.navbar-nav .nav-link')
let cardlinks = $('.card-text .card-link')

    navlinks.click((ev)=>{
        let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`
        $('#content').load(componentUrl)
    })

    cardlinks.click((ev)=>{
        let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`
        $('#content').load(componentUrl)
    })