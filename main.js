const {app, BrowserWindow, Menu, dialog, shell} = require('electron');

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 400,
    height: 650,
    title: 'Ani Robot',
    transparent: true,
    hasShadow: false,
    alwaysOnTop: true,
    fullscreenable: false
  });
  window.loadURL('file://' + __dirname + '/index.html');
  menuSetup(window);
});

function menuSetup(window) {
  const menuTemplate = [
    {
      label: 'Ani Robot',
      submenu: [
        {
          label: 'About',
          click: () => {
            dialog.showMessageBox(window, {
              type: 'info',
              title: 'About',
              message: 'Ani Robot is built by Elena Ageeva',
              detail: 'You can find her on GitHub as @tereshka'
            });
          }
        },
        {
          label: 'Contribute',
          click: () => {
            shell.openExternal('http://github.com/cassidoo/desktop-ani-robot');
          }
        },
        {
          type: 'separator'
        }, {
          label: 'Quit',
          accelerator: 'CommandOrControl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}
