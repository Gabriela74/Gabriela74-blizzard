"use strict";var slide_thumbnail=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0,breakpoints:{320:{direction:"horizontal"},1150:{direction:"vertical"}}}),progressSlide=document.querySelector(".js-progress"),slide_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3,disableOnInteraction:!1},on:{init:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("animate"),progressSlide.classList.add("active")},slideChangeTransitionStart:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("active")},slideChangeTransitionEnd:function(){progressSlide.classList.add("animate")}}}),allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games"),btnOpenModal=(allFilters.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[n].classList.add("active"),t.classList.add("active")})}),document.querySelector(".js-open-modal")),btnFecharModal=document.querySelector(".js-close"),btnMenu=(btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal")}),btnFecharModal.addEventListener("click",function(){document.documentElement.classList.remove("show-modal")}),document.querySelectorAll(".js-btn-menu")),MenuSite=document.querySelectorAll(".js-menu"),btnMenuMobile=(btnMenu.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault(),MenuSite.forEach(function(e){e.classList.remove("active"),e.addEventListener("mouseleave",function(){e.classList.remove("active"),btnMenu.forEach(function(e){e.classList.remove("active")})})}),btnMenu.forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),MenuSite[n].classList.add("active")})}),document.getElementById("js-btn-menu-mobile")),overlayMenu=document.querySelector(".js-overlay");function openMenuMobile(){document.documentElement.classList.toggle("menu-opened")}btnMenuMobile.addEventListener("click",openMenuMobile),overlayMenu.addEventListener("click",openMenuMobile);