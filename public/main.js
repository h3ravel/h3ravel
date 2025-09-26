fetch('/h3ravel-logo.svg')
  .then(response => response.text())
  .then(svgXml => {
    const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgXml)}`
    console.log('%c ', `
      background-image: url(${svgDataUrl});
      padding-top: 2px;
      padding-left: 7px; 
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    `, 'H3ravel - The web framework that masks your fears!')
  })
