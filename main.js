

{/* <div class="back_modal">
    <h3>Back this project</h3>
    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
    <div class="content_about_items">
      <div class="content_about_items_item">
        <h3 class="item_name">Pledge with no reward</h3>
        <!-- <span class="item_price">Pledge $25 or more</span> -->
        <p class="item_description">Choose to support us without a reward if you simply believe in our project. As a backer, 
          you will be signed up to receive product updates via email.
          </p>
        <!-- <span class="item_count">101 left</span>
        <span class="item_select">Select Reward</span> -->
      </div>
      <div class="content_about_items_item">
        <h3 class="item_name">Bamboo Stand</h3>
        <span class="item_price">Pledge $25 or more</span>
        <p class="item_description">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
          you’ll be added to a special Backer member list.
          </p>
        <span class="item_count">101 left</span>
        <span class="item_select">Select Reward</span>
      </div>
      <div class="content_about_items_item">
        <h3 class="item_name">Black Edition Stand</h3>
        <span class="item_price">Pledge $75 or more</span>
        <p class="item_description">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included.
          </p>
        <span class="item_count">64 left</span>
        <span class="item_select">Select Reward</span>
      </div>
      <div class="content_about_items_item">
        <h3 class="item_name">Mahogany Special Edition</h3>
        <span class="item_price">Pledge $75 or more</span>
        <p class="item_description">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included.
          </p>
        <span class="item_count">0 left</span>
        <span class="item_select">Select Reward</span>
      </div>
    </div>
</div>
 */}


backModal=document.getElementsByClassName('back_modal')[0];

btn=document.getElementsByClassName('back')[0];
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    backModal.style.display='block';
})

/* countElem=document.getElementsByClassName('backed_count')[0];
count=parseInt(countElem.innerHTML);
console.log(count);
backButton=document.getElementsByClassName('back')[0];
backButton.onclick=(e)=>{
  e.preventDefault();
  countElem.innerHTML=count++;
} */