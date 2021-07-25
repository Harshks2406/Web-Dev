let cardlinks = $('.card-text .card-link')

cardlinks.click((ev)=>{
    let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})
