/*Task 3: cart*/
(function () {
    const MAX_PER_PRODUCT = 4;                    

    const cartBtn   = document.getElementById('cartBtn');
    const miniCart  = document.getElementById('miniCart');
    const cartList  = document.getElementById('cartList');
    const cartTotal = document.getElementById('cartTotal');
    const cartBadge = document.getElementById('cartBadge');
    const cards     = document.querySelectorAll('.p-card');

    if (!cartBtn || !miniCart || cards.length === 0) return;  
    let cart = [];                               

    function getName(card) {
        return card.querySelector('.p-title').textContent.trim();
    }
    function getPrice(card) {
        
        const text = card.querySelector('.p-price').firstChild.textContent;
        return parseFloat(text.replace(/[^0-9.]/g, ''));
    }
    function countOf(name) {
        return cart.filter(item => item.name === name).length;
    }

    function render() {
        
        cartList.innerHTML = '';
        if (cart.length === 0) {
            cartList.innerHTML = '<li>Your bag is empty.</li>';
        }
        cart.forEach((item, index) => {
            const li = document.createElement('li');

            const name = document.createElement('span');
            name.className = 'item-name';
            name.textContent = item.name;

            const price = document.createElement('span');
            price.textContent = '$' + item.price.toFixed(2);

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'remove-btn';
            btn.textContent = 'Remove';
            btn.dataset.index = index;

            li.append(name, price, btn);
            cartList.appendChild(li);
        });

        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = '$' + total.toFixed(2);

        cartBadge.textContent = cart.length;
        cartBadge.hidden = cart.length === 0;

        
        cards.forEach(card => {
            const btn = card.querySelector('.p-btn');
            if (countOf(getName(card)) >= MAX_PER_PRODUCT) {
                btn.disabled = true;
                btn.textContent = 'Limit reached';
            } else {
                btn.disabled = false;
                btn.textContent = btn.dataset.label;
            }
        });
    }

    // Add to cart
    cards.forEach(card => {
        const btn = card.querySelector('.p-btn');
        btn.dataset.label = btn.textContent;      
        btn.addEventListener('click', () => {
            const name = getName(card);
            if (countOf(name) >= MAX_PER_PRODUCT) return;
            cart.push({ name: name, price: getPrice(card) });
            render();
        });
    });

   
    cartList.addEventListener('click', e => {
        const btn = e.target.closest('.remove-btn');
        if (!btn) return;
        cart.splice(Number(btn.dataset.index), 1);
        render();
    });

    // Cart icon toggles the panel
    cartBtn.addEventListener('click', e => {
        e.preventDefault();                      
        miniCart.hidden = !miniCart.hidden;
        cartBtn.setAttribute('aria-expanded', String(!miniCart.hidden));
    });

    render();
})();