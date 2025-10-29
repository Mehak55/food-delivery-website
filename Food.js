 const restaurants = [
  {id: 1, name: "Italiano Bistro"},
  {id: 2, name: "Burger House"},
  {id: 3, name: "Sushi World"},
  {id: 4, name: "Dessert Haven"},
  {id: 5, name: "Shake & Sip"}
];

const menuItems = [
  // Italiano Bistro - Pizza (Veg & Non-Veg)
  {id:1, name:"Margherita Pizza (Veg)", category:"Pizza", price:500, image:"https://allforpizza.com/wp-content/uploads/2022/07/1460A7EC-CF3B-40E8-B05F-A21E12E85EC6.jpeg", meal:"Lunch", restaurant:1},
  {id:2, name:"Pepperoni Pizza (Non-Veg)", category:"Pizza", price:550, image:"https://cdn.uengage.io/uploads/5/image-287341-1715678908.png", meal:"Dinner", restaurant:1},
  {id:3, name:"Veggie Delight Pizza", category:"Pizza", price:520, image:"https://m1.quebecormedia.com/emp/cl_prod/canadian_living-_-defbc3c3683d28a2df0fe124203f039c37678bb9-_-veggie-delight-pizza.jpg?impolicy=resize&width=1500&height=1500", meal:"Lunch", restaurant:1},
  {id:4, name:"BBQ Chicken Pizza (Non-Veg)", category:"Pizza", price:600, image:"https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw=", meal:"Dinner", restaurant:1},

  // Burgers
  {id:5, name:"Cheese Burger", category:"Burger", price:200, image:"https://www.sargento.com/assets/Uploads/Recipe/Image/cheddarbaconcheeseburger__FillWzgwMCw4MDBd.jpg", meal:"Lunch", restaurant:2},
  {id:6, name:"Veggie Burger", category:"Burger", price:220, image:"https://plus.unsplash.com/premium_photo-1664648063548-50808d58f061?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687", meal:"Dinner", restaurant:2},
  {id:7, name:"Chicken Burger", category:"Burger", price:250, image:"https://media.istockphoto.com/id/521207406/photo/southern-country-fried-chicken-sandwich.jpg?s=612x612&w=0&k=20&c=XfttLSxEO2YAjop4Gy0CIb1L5N_OK1tTKxmkiPr3QD8=", meal:"Dinner", restaurant:2},

  // Soups
  {id:8, name:"Tomato Soup", category:"Soup", price:120, image:"https://images.unsplash.com/photo-1620418025834-f4379baf1de9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687", meal:"Breakfast", restaurant:2},
  {id:9, name:"Miso Soup", category:"Soup", price:150, image:"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-01-miso-soup%2Fmiso-soup-030", meal:"Lunch", restaurant:3},
  {id:10, name:"Chicken Soup", category:"Soup", price:180, image:"https://www.whiskaffair.com/wp-content/uploads/2016/08/Clear-Chicken-Soup-2-3.jpg", meal:"Dinner", restaurant:2},

  // Desserts
  {id:11, name:"Chocolate Cake", category:"Dessert", price:250, image:"https://static.toiimg.com/thumb/53096885.cms?imgsize=1572013&width=800&height=800", meal:"Lunch", restaurant:4},
  {id:12, name:"Ice Cream Sundae", category:"Dessert", price:200, image:"https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW0lMjBzdW5kYWV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000", meal:"Dinner", restaurant:4},
  {id:13, name:"Brownie Delight", category:"Dessert", price:220, image:"https://www.cadburydessertscorner.com/hs-fs/hubfs/dc-website-2022/articles/sizzling-chocolate-brownie-delight/chocolate-sizzler-brownie-feature.webp?width=1920&height=464&name=chocolate-sizzler-brownie-feature.webp", meal:"Lunch", restaurant:4},

  // Sushi World
  {id:14, name:"California Roll", category:"Sushi", price:400, image:"https://media.istockphoto.com/id/1932845749/photo/sushi-rolls-with-salmon-cheese-caviar.jpg?s=612x612&w=0&k=20&c=0ltZ3jrS99uTKxD1fJV0_qAcgvO7UiDKISntIA2iS0A=", meal:"Dinner", restaurant:3},
  {id:15, name:"Salmon Nigiri", category:"Sushi", price:350, image:"https://media.istockphoto.com/id/533713646/photo/close-up-of-sashimi-sushi-set-with-chopsticks-and-soy.jpg?s=612x612&w=0&k=20&c=29ESG2HI79aNASIHBJJR3EO_Xx2Z8YvNhTn17z3lqPk=", meal:"Lunch", restaurant:3},

  // Snacks
  {id:16, name:"French Fries", category:"Snacks", price:100, image:"https://www.savoryexperiments.com/wp-content/uploads/2024/02/Cajun-Fries-19.jpg", meal:"Lunch", restaurant:2},
  {id:17, name:"Nachos", category:"Snacks", price:150, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDXuLc0ScaYf5wQLTvHc5svWRuotqG_G_Cg&s", meal:"Dinner", restaurant:2},
  {id:18, name:"Veg Sandwich", category:"Snacks", price:120, image:"https://thumbs.dreamstime.com/b/veg-grilled-sandwich-served-ketchup-isolated-over-rustic-wooden-background-selective-focus-224440470.jpg", meal:"Lunch", restaurant:1},

  // Milkshakes & Thick Shakes
  {id:19, name:"Chocolate Milkshake", category:"Shake", price:150, image:"https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=698", meal:"Lunch", restaurant:5},
  {id:20, name:"Strawberry Milkshake", category:"Shake", price:160, image:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", meal:"Dinner", restaurant:5},
  {id:21, name:"Oreo Thick Shake", category:"Shake", price:180, image:"https://img.freepik.com/free-photo/front-view-dessert-jar-with-chocolate-biscuits-rolls_23-2148603219.jpg?semt=ais_hybrid&w=740&q=80", meal:"Dinner", restaurant:5},
  {id:22, name:"Banana Thick Shake", category:"Shake", price:170, image:"https://www.shutterstock.com/image-photo/jug-tasty-banana-milk-shake-600nw-523523605.jpg", meal:"Lunch", restaurant:5},

  // Pasta & Noodles
{id:23, name:"Spaghetti Alfredo", category:"Pasta", price:350, image:"https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg", meal:"Lunch", restaurant:1},
{id:24, name:"Penne Arrabiata", category:"Pasta", price:320, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGp4I_eko7Q0LK-NFj54QTrvePhNtHU0Bdw&s", meal:"Dinner", restaurant:1},
{id:25, name:"Veg Hakka Noodles", category:"Noodles", price:250, image:"https://www.ohmyveg.co.uk/wp-content/uploads/2024/08/hakka-noodles.jpg", meal:"Lunch", restaurant:2},
{id:26, name:"Chicken Chow Mein", category:"Noodles", price:280, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGSVGPSxueFiLom5S8urzfy1a4_rwVh0RgA&s", meal:"Dinner", restaurant:2},
{id:27, name:"Schezwan Noodles", category:"Noodles", price:270, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaNmROvD2CuRKf1aOhnegKlmqcg5ysguzGw&s", meal:"Lunch", restaurant:2},
{id:28, name:"Mac & Cheese", category:"Pasta", price:300, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SHOkiA0um5tZ3V23l-zXN6WJzKNW-01AWw&s", meal:"Dinner", restaurant:1},

// More Desserts
{id:29, name:"Red Velvet Cake", category:"Dessert", price:280, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyiiJMe_G9kMysiGhhrvB0suFYYnGEjjhSw&s", meal:"Lunch", restaurant:4},
{id:30, name:"Cheesecake", category:"Dessert", price:300, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpU_tCDnZIajfHF_QJ0kXdRHj6dVBj1cvHGQ&s", meal:"Dinner", restaurant:4},
{id:31, name:"Chocolate Lava Cake", category:"Dessert", price:320, image:"https://media.istockphoto.com/id/541267186/photo/chocolate-fondant-with-strawberries-and-powdered-sugar.jpg?s=612x612&w=0&k=20&c=6a_-IAUELw0zVMR0vjVtr9UiDg_GAN-S3eowoDGsMhI=", meal:"Lunch", restaurant:4},
{id:32, name:"Fruit Tart", category:"Dessert", price:250, image:"https://www.culinaryhill.com/wp-content/uploads/2023/07/Fresh-Fruit-Tart-Culinary-Hill-1200x-800-500x500.jpg", meal:"Lunch", restaurant:4},
{id:33, name:"Cupcake Variety Pack", category:"Dessert", price:200, image:"https://sweet-treasures.com/cdn/shop/files/IMG_8220.jpg?v=1706044573&width=480", meal:"Dinner", restaurant:4},


];

// ---- Existing JS code for rendering menu, cart, filters, search ---- //

let cart = [];
let selectedRestaurant = 0;

const restaurantSelect = document.getElementById('restaurant');
const menuSection = document.getElementById('menu-section');
const categoryButtonsDiv = document.getElementById('category-buttons');
const cartSlide = document.getElementById('cart-slide');
const cartItemsDiv = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const searchInput = document.getElementById('search');

// Populate restaurant select
restaurants.forEach(r => {
  const option = document.createElement('option');
  option.value = r.id;
  option.text = r.name;
  restaurantSelect.appendChild(option);
});

// Render menu items
function renderMenu(items) {
  menuSection.innerHTML = '';
  const categories = ["All", ...new Set(items.map(i=>i.category))];
  categoryButtonsDiv.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.innerText = cat;
    btn.onclick = ()=> filterCategory(cat);
    categoryButtonsDiv.appendChild(btn);
  });

  items.forEach(item=>{
    const div = document.createElement('div');
    div.className = 'food-card';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick='addToCart(${item.id}, this)'>Add to Cart</button>
    `;
    menuSection.appendChild(div);
  });
}

// Add to cart with animation
function addToCart(id, button){
  const item = menuItems.find(i=>i.id===id);
  const existing = cart.find(i=>i.id===id);
  if(existing) existing.quantity +=1;
  else cart.push({...item, quantity:1});
  updateCartUI();
  
  // Animate button
  button.classList.add('added');
  setTimeout(()=>button.classList.remove('added'), 500);
}

// Update cart UI
function updateCartUI(){
  cartItemsDiv.innerHTML = '';
  cart.forEach(item=>{
    cartItemsDiv.innerHTML += `<p>${item.name} x ${item.quantity} - ₹${item.price*item.quantity}</p>`;
  });
  cartCount.innerText = cart.reduce((a,b)=>a+b.quantity,0);
}

// Toggle cart slide
function toggleCart(){
  cartSlide.classList.toggle('active');
}

// Checkout
document.getElementById('checkout-btn').addEventListener('click', ()=>{
  if(cart.length === 0) return alert('Cart is empty!');
  alert(`Order placed! Total: ₹${cart.reduce((a,b)=>a+b.price*b.quantity,0)}`);
  cart = [];
  updateCartUI();
  cartSlide.classList.remove('active');
});

// Filter by category
function filterCategory(category){
  const items = getFilteredItems();
  if(category==="All") renderMenu(items);
  else renderMenu(items.filter(i=>i.category===category));
}

// Filter by restaurant
function changeRestaurant(){
  selectedRestaurant = parseInt(restaurantSelect.value);
  renderMenu(getFilteredItems());
}

// Filter items by restaurant and search
function getFilteredItems(){
  let items = menuItems;
  if(selectedRestaurant!==0) items = items.filter(i=>i.restaurant===selectedRestaurant);
  const search = searchInput.value.toLowerCase();
  if(search) items = items.filter(i=>i.name.toLowerCase().includes(search));
  return items;
}

// Search food
function searchFood(){
  renderMenu(getFilteredItems());
}

// Initial render
renderMenu(menuItems);