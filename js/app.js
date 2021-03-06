/*jshint esversion: 6*/
// Sidenav init
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Fixed contact button init
const floatingactionbutton = document.querySelectorAll('.fixed-action-btn');
M.FloatingActionButton.init(floatingactionbutton, {});

// Fixed contact button init
// const floatingmenubutton = document.querySelectorAll('.floating__menu__button');
// M.FloatingActionButton.init(floatingmenubutton, { toolbarEnabled: true });

// Tool tip init
const tooltip = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tooltip, {});

// Modal init
const modal = document.querySelectorAll('.modal');
M.Modal.init(modal, {});

// Material box init
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox, {});