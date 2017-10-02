class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];

    }

    addLink(href, name) {
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name)
        this.links.push(link);
    }

    appendTo(selector) {
        let header = $('<header>').addClass('header');
        let hederRow = $('<div>').addClass('header-row');
        let button = $('<a>')
            .addClass('button')
            .html('&#9776;')
            .click(()=> $('div.drawer').toggle()); //div with class drawer display on/off
        let span = $('<span>')
            .addClass('title')
            .text(this.title);
        let drawer = $('<div>')
            .addClass('darwer');
        let navMenu = $('<nav>')
            .addClass('menu');
        // Append
        this.links.forEach(link => navMenu.append(link));
        hederRow.append(button);
        hederRow.append(span);
        drawer.append(navMenu);
        header.append(hederRow);
        header.append(drawer);
        $(selector).append(header);
    }
}
