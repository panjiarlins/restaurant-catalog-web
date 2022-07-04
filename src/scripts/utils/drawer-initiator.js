const DrawerInitiator = {
  // eslint-disable-next-line object-curly-newline
  init({ button, drawer, content, menuItems }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });

      menuItem.addEventListener('focus', (event) => {
        this._setOpenDrawer(event, drawer);
      });

      menuItem.addEventListener('focusout', (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _setOpenDrawer(event, drawer) {
    event.stopPropagation();
    drawer.setAttribute('class', 'open');
  },
};

export default DrawerInitiator;
