
// HOOKS
var stdMenu     = $('.header-right');     // ** MENU STANDARD
var hamMenu     = $('.hamburger-menu');   // ** MENU PANINO
var hamBtnOpen  = $('.header-right > a'); // ** MENU PANINO: PULSANTE APRI
var hamBtnClose = $('.close');            // ** MENU PANINO: PULSANTE CHIUDI

// HOOK TESTS
// stdMenu.css({     display: 'block', border: '1px solid red' }); // hook test OK
// hamMenu.css({     display: 'block', border: '1px solid red' }); // hook test OK
// hamBtnOpen.css({  display: 'block', border: '1px solid red' }); // hook test OK
// hamBtnClose.css({ display: 'block', border: '1px solid red' }); // hook test OK

// CLICK FUNCTIONS
hamBtnOpen
  .click(function() {
  // .on('click', function(){
    // alert('hamBtnOpen clicked!');
    // hamMenu.css({ display: 'block' });
    // hamMenu.show();
    // hamMenu.show(300);
    // hamMenu.fadeIn(300);
    hamMenu.fadeIn(300, function(){ hamMenu.css( { transition: '0.5s ease-in', transform: 'rotate(360deg)' } ); }); // show()/hide() methods
  });
hamBtnClose
  .click(function() {
  // .on('click', function(){
    // alert('hamBtnClose clicked!');
    // hamMenu.css({ display: 'none' });
    // hamMenu.hide();
    // hamMenu.hide(300);
    // hamMenu.fadeOut(300);
    hamMenu.fadeOut(100, function(){ hamMenu.css( { transform: 'rotate(0deg)' } /* rimette a posto i gradi */ ); }); 
    // hamMenu.animate({ transform: 'rotate(0deg)' }, 300, function(){ hamMenu.fadeOut(300); }); //** KO **
  });

/** 
 * NON riesco a 
 * 
 * >>> far funzionare transform:rotate dentro aniamte()
 * 
 * >>> concatenare prima rotazione e poi fadeOut (per la chiusura del menu)
 * 
 */
