
// Toggle side menu Function

function openSlide(){
    document.getElementById('wrapper').classList.toggle('toggled');
    
        /* This below code is the masonry function.
           When window resized all the budget cards ovelaps altogether.
           to ignore that issue i set a timeout function (500ms) to execute the 
           masonry code again.
        */
        function myFunction(){
            $('.budget-cards-wrapper').masonry({
                itemSelector: '.bgt-mas',
                columnWidth: 0
              });
          }
        setTimeout(myFunction, 500);
}

//User Drop-Down

const userDrop=document.querySelector('.popup-user');
const adminIcon=document.querySelector('.drop-user');
adminIcon.addEventListener('click',function(){
    userDrop.classList.toggle('active');
});
//hide it when clicking anywhere else except the popup and the trigger
$(document).on('click touch', function(event) {
    if (!$(event.target).parents().addBack().is('.popup-user') && !$(event.target).parents().addBack().is('.drop-user')) {
        userDrop.classList.remove('active');
    }
  });
//End - User Drop-Down






  