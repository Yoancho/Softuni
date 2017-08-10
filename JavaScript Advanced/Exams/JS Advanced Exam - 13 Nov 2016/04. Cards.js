function cardDeckBuilder(selector) {
        return {
            addCard: function (face, suit) {
                suit = {
                    'C': "\u2663",  // ♣
                    'D': "\u2666",  // ♦
                    'H': "\u2665",  // ♥
                    'S': "\u2660"   // ♠
                }[suit];
                    let card = $(`<div class = 'card'>${face} ${suit}</div>`);
                    card.click(this.reverseCards);
                    $(selector).append(card);
            },
            reverseCards: function () {
                let allCards = $(selector + ' .card').toArray();
                allCards.reverse();
                $(selector).append(allCards);
            }
        }
    }

