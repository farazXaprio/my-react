import React from 'react';

const Innovation = () => {
return (
	<div id="XPDadDiv" style={{textAlign: 'center', float: 'left', width: '100%', height: '300px'}}>
    
    <div id="insideAd" style={{float: 'left', width: '200px', height: '157px', backgroundImage: 'url(https://asset.xapads.com/html5-ad-gallery/colgate/bg.png)', backgroundSize: 'cover', position: 'fixed', bottom: '2px', left: '2px', transition: 'width 0.1s ease, left 1s, bottom 2s ease', zIndex: '999999999999 !important'}}>
      <span id="CPDCologo" style={{position: 'absolute !important', zIndex: '999999999 !important', width: '100%', left: '0'}}><img src="https://asset.xapads.com/html5-ad-gallery/colgate/logo.svg" alt="Logo" style={{width: '15% !important'}}/></span>
      <div id="XPDVidConat" style={{display: 'block'}}>
        
        <video id="XPDvIdeo" style={{width: '100% !important', background: '#000', marginTop: '6%'}} autoplay muted="muted">
          <source src="https://asset.xapads.com/html5-ad-gallery/colgate/colgate.mp4?v=1" type="video/mp4"/>
          Your browser does not support HTML video.
        </video>
        <div id="XPDbelowVid" style={{float: 'left', width: '100%'}}>
          <div id="XPDLeftDiv" style={{float: 'left', width: '20%', marginLeft: '3%', marginTop: '0%'}}>
            <img src="https://asset.xapads.com/html5-ad-gallery/colgate/optic-white.svg" alt="Colgate" style={{width: '100% !important'}}/>
          </div>
          <div id="XPDMiddleDiv" style={{marginLeft: '9%', width: '35%', float: 'left', position: 'relative', marginTop: '-8%'}}>
            <img src="https://asset.xapads.com/html5-ad-gallery/colgate/colgate-img.png" alt="Colgate" style={{width: '100% !important'}}/>
          </div>
          <div id="XPDRightDiv" style={{float: 'left', width: '23%', marginTop: '-2%', marginLeft: '5%', animation: 'XPDchoco 5s infinite', animationDuration: '2s'}}>
            <a id="XPDCTA" href="https://xapads.com" style={{color: '#fff', fontSize: '0.4em', border: '1px solid #fff', padding: '7% 11%', borderTopLeftRadius: '36px', borderTopRightRadius: '0px', borderBottomLeftRadius: '36px', borderBottomRightRadius: '36px'}}>Learn More</a>
          </div>
        </div>
      </div>

      <div id="XPDafterVid" style={{float: 'left', width: '100%', display: 'none', height: 'inherit', textAlign: 'center'}}>
        <span id="XPDopticH" style={{marginTop: '12%', display: 'block'}}><img src="https://asset.xapads.com/html5-ad-gallery/colgate/colgate-optic-white.svg" alt="Colgate" style={{width: '55% !important'}}/></span>
        <span id="XPDopticP" style={{display: 'block', marginTop: '-2%'}}><img src="https://asset.xapads.com/html5-ad-gallery/colgate/optic-white-text.svg" alt="Colgate" style={{width: '55% !important'}}/></span>
        <span id="XPDCTRAnchor" style={{display: 'block', marginTop: '-1%'}}><a id="XPDCTA1" href="https://xapads.com" style={{color: '#fff', fontSize: '0.4em', border: '1px solid #fff', padding: '2% 4%', borderTopLeftRadius: '36px', borderTopRightRadius: '0px', borderBottomLeftRadius: '36px', borderBottomRightRadius: '36px'}}>Learn More</a></span>
        <div id="XPDMiddleDivHov" style={{marginTop: '5%', marginBottom: '2%', width: '100%', float: 'left', position: 'relative'}}>
            <img src="https://asset.xapads.com/html5-ad-gallery/colgate/colgate-img.png" alt="Colgate" style={{width: '50% !important'}}/>
          </div>
      </div>

    </div>

</div>



);



};

export default Innovation;
