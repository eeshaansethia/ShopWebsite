var i1 = 0; var i2 = 0; var i3 = 0; var i4 = 0; var i5 = 0; var i6 = 0; var i7 = 0; var i8 = 0; var i9 = 0; var i10 = 0; var i11 = 0; var i12 = 0; var i13 = 0; var i14 = 0; var i15 = 0; var i16 = 0; var i17 = 0; var i18 = 0; var i19 = 0; var i20 = 0; var i21 = 0; var i122 = 0; var i23 = 0; var i24 = 0; var i25 = 0; var i26 = 0; var i27 = 0; var i28 = 0; var i29 = 0; var i30 = 0; var i31 = 0; var i32 = 0; var i33 = 0; var i34 = 0; var i35 = 0; var i36 = 0;



let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


function show1() {
    document.getElementById('card1').style.display = "flex";
    document.getElementById('card2').style.display = "none";
    document.getElementById('card3').style.display = "none";
    document.getElementById('card4').style.display = "none";
    document.getElementById('card5').style.display = "none";
    document.getElementById('card6').style.display = "none";
    document.getElementById('card7').style.display = "none";
    document.getElementById('card8').style.display = "none";
    document.getElementById('card9').style.display = "none";
}
function show2() {
    document.getElementById('card2').style.display = "flex";
    document.getElementById('card1').style.display = "none";
    document.getElementById('card3').style.display = "none";
    document.getElementById('card4').style.display = "none";
    document.getElementById('card5').style.display = "none";
    document.getElementById('card6').style.display = "none";
    document.getElementById('card7').style.display = "none";
    document.getElementById('card8').style.display = "none";
    document.getElementById('card9').style.display = "none";
}
function show3() {
    document.getElementById('card3').style.display = "flex";
    document.getElementById('card2').style.display = "none";
    document.getElementById('card1').style.display = "none";
    document.getElementById('card4').style.display = "none";
    document.getElementById('card5').style.display = "none";
    document.getElementById('card6').style.display = "none";
    document.getElementById('card7').style.display = "none";
    document.getElementById('card8').style.display = "none";
    document.getElementById('card9').style.display = "none";
}
function show4() {
    document.getElementById('card4').style.display = "flex";
    document.getElementById('card2').style.display = "none";
    document.getElementById('card3').style.display = "none";
    document.getElementById('card1').style.display = "none";
    document.getElementById('card5').style.display = "none";
    document.getElementById('card6').style.display = "none";
    document.getElementById('card7').style.display = "none";
    document.getElementById('card8').style.display = "none";
    document.getElementById('card9').style.display = "none";
}
function show5() {
    document.getElementById('card5').style.display = "flex";
    document.getElementById('card2').style.display = "none";
    document.getElementById('card3').style.display = "none";
    document.getElementById('card4').style.display = "none";
    document.getElementById('card1').style.display = "none";
    document.getElementById('card6').style.display = "none";
    document.getElementById('card7').style.display = "none";
    document.getElementById('card8').style.display = "none";
    document.getElementById('card9').style.display = "none";
}
function show6() {
    document.getElementById('card6').style.display = "flex";
    document.getElementById('card2').style.display = "none";
    document.getElementById('card3').style.display = "none";
    document.getElementById('card4').style.display = "none";
    document.getElementById('card5').style.display = "none";
    document.getElementById('card1').style.display = "none";
    document.getElementById('card7').style.display = "none";
    document.getElementById('card8').style.display = "none";
    document.getElementById('card9').style.display = "none";
}
function show7() {
    document.getElementById('card7').style.display = "flex";
    document.getElementById('card2').style.display = "none";
    document.getElementById('card3').style.display = "none";
    document.getElementById('card4').style.display = "none";
    document.getElementById('card5').style.display = "none";
    document.getElementById('card6').style.display = "none";
    document.getElementById('card1').style.display = "none";
    document.getElementById('card8').style.display = "none";
    document.getElementById('card9').style.display = "none";
}
function show8() {
    document.getElementById('card8').style.display = "flex";
    document.getElementById('card2').style.display = "none";
    document.getElementById('card3').style.display = "none";
    document.getElementById('card4').style.display = "none";
    document.getElementById('card5').style.display = "none";
    document.getElementById('card6').style.display = "none";
    document.getElementById('card7').style.display = "none";
    document.getElementById('card1').style.display = "none";
    document.getElementById('card9').style.display = "none";
}
function show9() {
    document.getElementById('card9').style.display = "flex";
    document.getElementById('card2').style.display = "none";
    document.getElementById('card3').style.display = "none";
    document.getElementById('card4').style.display = "none";
    document.getElementById('card5').style.display = "none";
    document.getElementById('card6').style.display = "none";
    document.getElementById('card7').style.display = "none";
    document.getElementById('card8').style.display = "none";
    document.getElementById('card1').style.display = "none";
}
function show10() {
    if (i1 % 2 === 0) {
        document.getElementById('bt1').innerHTML = "Added to Cart";
        document.getElementById('bt1').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i1 % 2 !== 0) {
        document.getElementById('bt1').innerHTML = "Add to Cart";
        document.getElementById('bt1').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i1++;

}



function show11() {
    if (i2 % 2 === 0) {
        document.getElementById('bt2').innerHTML = "Added to Cart";
        document.getElementById('bt2').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i2 % 2 !== 0) {
        document.getElementById('bt2').innerHTML = "Add to Cart";
        document.getElementById('bt2').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i2++;

}
function show12() {
    if (i3 % 2 === 0) {
        document.getElementById('bt3').innerHTML = "Added to Cart";
        document.getElementById('bt3').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i3 % 2 !== 0) {
        document.getElementById('bt3').innerHTML = "Add to Cart";
        document.getElementById('bt3').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i3++;

}
function show13() {
    if (i4 % 2 === 0) {
        document.getElementById('bt4').innerHTML = "Added to Cart";
        document.getElementById('bt4').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i4 % 2 !== 0) {
        document.getElementById('bt4').innerHTML = "Add to Cart";
        document.getElementById('bt4').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i4++;

}
function show14() {
    if (i5 % 2 === 0) {
        document.getElementById('bt5').innerHTML = "Added to Cart";
        document.getElementById('bt5').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i5 % 2 !== 0) {
        document.getElementById('bt5').innerHTML = "Add to Cart";
        document.getElementById('bt5').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i5++;

}
function show15() {
    if (i6 % 2 === 0) {
        document.getElementById('bt6').innerHTML = "Added to Cart";
        document.getElementById('bt6').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i6 % 2 !== 0) {
        document.getElementById('bt6').innerHTML = "Add to Cart";
        document.getElementById('bt6').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i6++;

}
function show16() {
    if (i7 % 2 === 0) {
        document.getElementById('bt7').innerHTML = "Added to Cart";
        document.getElementById('bt7').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i7 % 2 !== 0) {
        document.getElementById('bt7').innerHTML = "Add to Cart";
        document.getElementById('bt7').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i7++;

}
function show17() {
    if (i8 % 2 === 0) {
        document.getElementById('bt8').innerHTML = "Added to Cart";
        document.getElementById('bt8').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i8 % 2 !== 0) {
        document.getElementById('bt8').innerHTML = "Add to Cart";
        document.getElementById('bt8').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i8++;

}
function show18() {
    if (i9 % 2 === 0) {
        document.getElementById('bt9').innerHTML = "Added to Cart";
        document.getElementById('bt9').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i9 % 2 !== 0) {
        document.getElementById('bt9').innerHTML = "Add to Cart";
        document.getElementById('bt9').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i9++;

}
function show19() {
    if (i10 % 2 === 0) {
        document.getElementById('bt10').innerHTML = "Added to Cart";
        document.getElementById('bt10').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i10 % 2 !== 0) {
        document.getElementById('bt10').innerHTML = "Add to Cart";
        document.getElementById('bt10').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i10++;

}
function show20() {
    if (i11 % 2 === 0) {
        document.getElementById('bt11').innerHTML = "Added to Cart";
        document.getElementById('bt11').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i11 % 2 !== 0) {
        document.getElementById('bt11').innerHTML = "Add to Cart";
        document.getElementById('bt11').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i11++;

}
function show21() {
    if (i12 % 2 === 0) {
        document.getElementById('bt12').innerHTML = "Added to Cart";
        document.getElementById('bt12').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i12 % 2 !== 0) {
        document.getElementById('bt12').innerHTML = "Add to Cart";
        document.getElementById('bt12').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i12++;

}
function show22() {
    if (i13 % 2 === 0) {
        document.getElementById('bt13').innerHTML = "Added to Cart";
        document.getElementById('bt13').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i13 % 2 !== 0) {
        document.getElementById('bt13').innerHTML = "Add to Cart";
        document.getElementById('bt13').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i13++;

}
function show23() {
    if (i14 % 2 === 0) {
        document.getElementById('bt14').innerHTML = "Added to Cart";
        document.getElementById('bt14').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i14 % 2 !== 0) {
        document.getElementById('bt14').innerHTML = "Add to Cart";
        document.getElementById('bt14').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i14++;
}

function show24() {
    if (i15 % 2 === 0) {
        document.getElementById('bt15').innerHTML = "Added to Cart";
        document.getElementById('bt15').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i15 % 2 !== 0) {
        document.getElementById('bt15').innerHTML = "Add to Cart";
        document.getElementById('bt15').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i15++;

}
function show25() {
    if (i16 % 2 === 0) {
        document.getElementById('bt16').innerHTML = "Added to Cart";
        document.getElementById('bt16').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i16 % 2 !== 0) {
        document.getElementById('bt16').innerHTML = "Add to Cart";
        document.getElementById('bt16').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i16++;

}
function show26() {
    if (i17 % 2 === 0) {
        document.getElementById('bt17').innerHTML = "Added to Cart";
        document.getElementById('bt17').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i17 % 2 !== 0) {
        document.getElementById('bt17').innerHTML = "Add to Cart";
        document.getElementById('bt17').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i17++;

}
function show27() {
    if (i18 % 2 === 0) {
        document.getElementById('bt18').innerHTML = "Added to Cart";
        document.getElementById('bt18').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i18 % 2 !== 0) {
        document.getElementById('bt18').innerHTML = "Add to Cart";
        document.getElementById('bt18').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i18++;

}
function show28() {
    if (i19 % 2 === 0) {
        document.getElementById('bt19').innerHTML = "Added to Cart";
        document.getElementById('bt19').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i19 % 2 !== 0) {
        document.getElementById('bt19').innerHTML = "Add to Cart";
        document.getElementById('bt19').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i19++;

}
function show29() {
    if (i20 % 2 === 0) {
        document.getElementById('bt20').innerHTML = "Added to Cart";
        document.getElementById('bt20').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i20 % 2 !== 0) {
        document.getElementById('bt20').innerHTML = "Add to Cart";
        document.getElementById('bt20').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i20++;

}
function show30() {
    if (i21 % 2 === 0) {
        document.getElementById('bt21').innerHTML = "Added to Cart";
        document.getElementById('bt21').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i21 % 2 !== 0) {
        document.getElementById('bt21').innerHTML = "Add to Cart";
        document.getElementById('bt21').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i21++;

}
function show31() {
    if (i22 % 2 === 0) {
        document.getElementById('bt22').innerHTML = "Added to Cart";
        document.getElementById('bt22').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i22 % 2 !== 0) {
        document.getElementById('bt22').innerHTML = "Add to Cart";
        document.getElementById('bt22').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i22++;

}
function show32() {
    if (i23 % 2 === 0) {
        document.getElementById('bt23').innerHTML = "Added to Cart";
        document.getElementById('bt23').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i23 % 2 !== 0) {
        document.getElementById('bt23').innerHTML = "Add to Cart";
        document.getElementById('bt23').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i23++;

}
function show33() {
    if (i24 % 2 === 0) {
        document.getElementById('bt24').innerHTML = "Added to Cart";
        document.getElementById('bt24').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i24 % 2 !== 0) {
        document.getElementById('bt24').innerHTML = "Add to Cart";
        document.getElementById('bt24').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i24++;

}
function show34() {
    if (i25 % 2 === 0) {
        document.getElementById('bt25').innerHTML = "Added to Cart";
        document.getElementById('bt25').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i25 % 2 !== 0) {
        document.getElementById('bt25').innerHTML = "Add to Cart";
        document.getElementById('bt25').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i25++;

}
function show35() {
    if (i26 % 2 === 0) {
        document.getElementById('bt26').innerHTML = "Added to Cart";
        document.getElementById('bt26').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i26 % 2 !== 0) {
        document.getElementById('bt26').innerHTML = "Add to Cart";
        document.getElementById('bt26').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i26++;
}
function show36() {
    if (i27 % 2 === 0) {
        document.getElementById('bt27').innerHTML = "Added to Cart";
        document.getElementById('bt27').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i27 % 2 !== 0) {
        document.getElementById('bt27').innerHTML = "Add to Cart";
        document.getElementById('bt27').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i27++;
}
function show37() {
    if (i28 % 2 === 0) {
        document.getElementById('bt28').innerHTML = "Added to Cart";
        document.getElementById('bt28').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i28 % 2 !== 0) {
        document.getElementById('bt28').innerHTML = "Add to Cart";
        document.getElementById('bt28').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i28++;
}
function show38() {
    if (i29 % 2 === 0) {
        document.getElementById('bt29').innerHTML = "Added to Cart";
        document.getElementById('bt29').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i29 % 2 !== 0) {
        document.getElementById('bt29').innerHTML = "Add to Cart";
        document.getElementById('bt29').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i29++;
}
function show39() {
    if (i30 % 2 === 0) {
        document.getElementById('bt30').innerHTML = "Added to Cart";
        document.getElementById('bt30').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i30 % 2 !== 0) {
        document.getElementById('bt30').innerHTML = "Add to Cart";
        document.getElementById('bt30').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i30++;
}
function show40() {
    if (i31 % 2 === 0) {
        document.getElementById('bt31').innerHTML = "Added to Cart";
        document.getElementById('bt31').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i31 % 2 !== 0) {
        document.getElementById('bt31').innerHTML = "Add to Cart";
        document.getElementById('bt31').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i31++;
}
function show41() {
    if (i32 % 2 === 0) {
        document.getElementById('bt32').innerHTML = "Added to Cart";
        document.getElementById('bt32').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i32 % 2 !== 0) {
        document.getElementById('bt32').innerHTML = "Add to Cart";
        document.getElementById('bt32').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i32++;
}
function show42() {
    if (i33 % 2 === 0) {
        document.getElementById('bt33').innerHTML = "Added to Cart";
        document.getElementById('bt33').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i33 % 2 !== 0) {
        document.getElementById('bt33').innerHTML = "Add to Cart";
        document.getElementById('bt33').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i33++;
}
function show43() {
    if (i34 % 2 === 0) {
        document.getElementById('bt34').innerHTML = "Added to Cart";
        document.getElementById('bt34').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i34 % 2 !== 0) {
        document.getElementById('bt34').innerHTML = "Add to Cart";
        document.getElementById('bt34').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i34++;
}
function show44() {
    if (i35 % 2 === 0) {
        document.getElementById('bt35').innerHTML = "Added to Cart";
        document.getElementById('bt35').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i35 % 2 !== 0) {
        document.getElementById('bt35').innerHTML = "Add to Cart";
        document.getElementById('bt35').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i35++;
}
function show45() {
    if (i36 % 2 === 0) {
        document.getElementById('bt36').innerHTML = "Added to Cart";
        document.getElementById('bt36').style.background = "grey";
        alert("Item Added to cart");
    }
    if (i36 % 2 !== 0) {
        document.getElementById('bt36').innerHTML = "Add to Cart";
        document.getElementById('bt36').style.background = "lightpink";
        alert("Item removed from cart");
    }
    i36++;
}
function show46() {
    alert("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, minus corporis. Consequatur fugit sequi, saepe quis officiis magni dolor dolore unde, dignissimos illo voluptates voluptas");
}