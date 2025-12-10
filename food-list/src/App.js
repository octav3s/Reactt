function foodList() {
  let food = ['Croissant', 'Noodles', 'Pasta', 'Salad', 'Burger'];

  function showMessage(message) {
    document.getElementById("message").innerText = message;
  }
  return (
    <div>
      <h3> Select a food that you love!</h3>
      <ul>
        {food.map((item, index) => <li key={index}>{item}
          <button onClick={() => { showMessage(`I Love ${ item }`) }}>Click</button>
        </li>)}
      </ul>
      <p id="message"></p>
    </div>
  );
}
export default foodList;