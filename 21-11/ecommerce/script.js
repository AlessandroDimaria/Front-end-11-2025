 const productCatalog = [
  { id: crypto.randomUUID(), name: "Notebook", price: 10, imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-plus/db16250/media-gallery/fpr/notebook-db16250nt-fpr-bl-gallery-2.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500" },
  { id: crypto.randomUUID(), name: "Pen", price: 2, imageUrl: "https://www.pngplay.com/wp-content/uploads/2/Black-Pen-PNG-Photos.png" },
  { id: crypto.randomUUID(), name: "Backpack", price: 30, imageUrl: "https://png.pngtree.com/png-clipart/20250416/original/pngtree-mockup-red-school-backpack-isolated-on-transparent-background-png-image_20702868.png" },
  { id: crypto.randomUUID(), name: "Pencil", price: 1, imageUrl: "https://purepng.com/public/uploads/large/purepng.com-pencilpencilnarrowsolid-pigment-corecharcoal-pencilsgreyblack-1421526585142jamr2.png"},
  { id: crypto.randomUUID(), name: "Eraser", price: 0.5, imageUrl: "https://www.tecnogea.com/wp-content/uploads/revslider/sleek-landing-page/eraser_pink.png" },
  { id: crypto.randomUUID(), name: "Ruler", price: 3, imageUrl: "https://www.freeiconspng.com/thumbs/ruler-png/ruler-png-25.png" },
  { id: crypto.randomUUID(), name: "Colored Pencils Set", price: 15, imageUrl: "https://png.pngtree.com/png-clipart/20240318/original/pngtree-colored-pencils-colour-pencils-png-image_14621557.png" },
  { id: crypto.randomUUID(), name: "Marker", price: 4, imageUrl: "https://www.pngall.com/wp-content/uploads/10/Pen-Marker-Transparent.png" },
  { id: crypto.randomUUID(), name: "Highlighter", price: 3, imageUrl: "https://png.pngtree.com/png-vector/20231031/ourmid/pngtree-highlighter-drawing-coloring-tip-png-image_10426853.png" },
  { id: crypto.randomUUID(), name: "Stapler", price: 6, imageUrl: "https://pngimg.com/d/stapler_PNG45.png" },
  { id: crypto.randomUUID(), name: "Desk Organizer", price: 20, imageUrl: "https://png.pngtree.com/png-clipart/20240921/original/pngtree-desk-organizer-on-transparent-background-png-image_16056839.png" },
  { id: crypto.randomUUID(), name: "Paper Clips Pack", price: 1, imageUrl: "https://png.pngtree.com/png-clipart/20231024/original/pngtree-blue-paper-clips-closeup-group-photo-png-image_13412077.png" },
  { id: crypto.randomUUID(), name: "Sticky Notes", price: 5, imageUrl: "https://www.pngall.com/wp-content/uploads/5/Sticky-Note-PNG-File-Download-Free.png" },
  { id: crypto.randomUUID(), name: "Binder", price: 8, imageUrl: "https://static.vecteezy.com/system/resources/previews/047/591/875/non_2x/red-binder-on-transparent-background-free-png.png" },
  { id: crypto.randomUUID(), name: "Calculator", price: 12, imageUrl: "https://pngimg.com/d/calculator_PNG102234.png" },
  { id: crypto.randomUUID(), name: "Laptop Sleeve", price: 25, imageUrl: "https://rivacase.com/images/7703/web.png" },
  { id: crypto.randomUUID(), name: "USB Flash Drive", price: 18, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/USB_Flash.png" },
  { id: crypto.randomUUID(), name: "Wireless Mouse", price: 22, imageUrl: "https://png.pngtree.com/png-clipart/20240520/original/pngtree-wireless-gaming-mouse-png-image_15140813.png" },
  { id: crypto.randomUUID(), name: "Headphones", price: 35, imageUrl: "https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp" },
  { id: crypto.randomUUID(), name: "Water Bottle", price: 15, imageUrl: "https://static.vecteezy.com/system/resources/previews/057/868/853/non_2x/impressive-vintage-reusable-water-bottle-bright-blue-isolated-on-transparent-background-genuine-free-png.png" },
  { id: crypto.randomUUID(), name: "Lunch Box", price: 14, imageUrl: "https://png.pngtree.com/png-clipart/20240615/original/pngtree-empty-lunch-box-isolated-on-transparent-background-generative-ai-png-image_15330076.png" },
  { id: crypto.randomUUID(), name: "Wireless Keyboard", price: 28, imageUrl: "https://www.freepnglogos.com/uploads/keyboard-png/full-size-wireless-keyboard-akb-keyboards-14.png" },
  { id: crypto.randomUUID(), name: "Pencil Case", price: 15, imageUrl: "https://choosingkeeping.com/cdn/shop/files/Hq3hKfLwCmSCsyk_BS0MRmFPZUyzEcpTzZHplJFOQ6s.png?v=1755877611" },
  { id: crypto.randomUUID(), name: "Desk Lamp", price: 28, imageUrl: "https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-3d-desk-lamp-png-illustration-png-image_11595799.png" },
  { id: crypto.randomUUID(), name: "Chalk Pack", price: 15, imageUrl: "https://pngimg.com/d/chalk_PNG10.png" },
  { id: crypto.randomUUID(), name: "Pencil sharpener", price: 3, imageUrl: "https://pngimg.com/d/pencil_sharpener_PNG21.png"},
  { id: crypto.randomUUID(), name: "Scissors", price: 6, imageUrl: "https://purepng.com/public/uploads/large/purepng.com-scissorsscissorsshearing-toolmetal-bladessnipclip-1701527916188nevjp.png" },
  { id: crypto.randomUUID(), name: "Glue Stick", price: 3, imageUrl: "https://www.pngall.com/wp-content/uploads/5/Glue-Stick-PNG-Free-Download.png" },
  { id: crypto.randomUUID(), name: "Tape Dispenser", price: 6, imageUrl: "https://png.pngtree.com/png-vector/20241102/ourmid/pngtree-practical-tape-dispenser-isolated-on-a-clean-background-png-image_14233384.png" },
  { id: crypto.randomUUID(), name: "Mouse Pad", price: 20, imageUrl: "https://www.logitech.com/content/dam/logitech/en/products/mice/mouse-pad-studio-series/gallery/logitech-mouse-pad-studio-series-corner-view-graphite.png" }
];
// Carrello inizialmente vuoto
let cart = [];

// Mostra catalogo
function showCatalog() {
  const productList = document.getElementById("product-list");

  productList.innerHTML = productCatalog.map(product => `
    <div class="product">
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>€${product.price}</p>
      <button data-id="${product.id}">Add to Cart</button>
    </div>
  `).join("");

  // Eventi pulsanti "Add to Cart"
  document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.id); // ✅ ID come stringa
    });
  });
}

// Aggiungi al carrello
function addToCart(productId) {
  const item = cart.find(p => p.productId === productId);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ productId, quantity: 1 });
  }
      document.getElementById("cart").style.display = "block";
  updateCart();
  updateTotal();
}

document.getElementById("clear-cart").addEventListener("click", () => {
  cart = [];
  updateCart();
  updateTotal();
  document.getElementById("cart").style.display = "none"; // torna nascosto
});
// Aggiorna carrello
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.textContent = "Cart is empty";
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    const product = productCatalog.find(p => p.id === item.productId);
    const subtotal = product.price * item.quantity;
    return `
      <div class="cart-item">
        ${product.name} x${item.quantity} - €${subtotal.toFixed(2)}
        <button data-id="${item.productId}">Remove</button>
      </div>
    `;
  }).join("");

  // Eventi pulsanti "Remove"
  document.querySelectorAll(".cart-item button").forEach(button => {
    button.addEventListener("click", () => {
      removeFromCart(button.dataset.id);
    });
  });
}

// Rimuovi dal carrello
function removeFromCart(productId) {
  const itemIndex = cart.findIndex(p => p.productId === productId);
  if (itemIndex > -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity--;
    } else {
      cart.splice(itemIndex, 1);
    }
  }
  updateCart();
  updateTotal();
}

// Aggiorna totale
function updateTotal() {
  const total = cart.reduce((sum, item) => {
    const product = productCatalog.find(p => p.id === item.productId);
    return sum + product.price * item.quantity;
  }, 0);

  document.getElementById("total-price").textContent = `Totale: €${total.toFixed(2)}`;
}

// Svuota carrello
document.getElementById("clear-cart").addEventListener("click", () => {
  cart = [];
  updateCart();
  updateTotal();
});

// Inizializzazione
document.addEventListener("DOMContentLoaded", () => {
  showCatalog();
  updateCart();
  updateTotal();
});