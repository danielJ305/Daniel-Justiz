import React from 'react';
import Gallery from 'react-grid-gallery';

import prairieLogo from '../../public/Media/Graphics/AndrewWeeks-Logo-PaperA4-2W.jpg'; 
import prairieLogos from '../../public/Media/Graphics/AndrewWeeks-Logo-PaperA4.jpg'; 
import whitfieldLogo from '../../public/Media/Graphics/Logo_Mockup_84.jpg';
import shirtP1 from '../../public/Media/Graphics/T-Shirt-Mock-Up-Back.jpg';
import shirtP2 from '../../public/Media/Graphics/T-Shirt-Mock-Up-Back2.jpg';
import lous from '../../public/Media/Graphics/lous-hoby.jpg';
import learn from '../../public/Media/Graphics/learn_v2.jpg';
import moving from '../../public/Media/Graphics/WeAreMoving.jpg';
import walk from '../../public/Media/Graphics/Walk-A-Thon(WEB).jpg';
import nature from '../../public/Media/Graphics/natmockup.jpg';
import port from '../../public/Media/Graphics/cover(Florida-Ports).jpg';
import logistics from '../../public/Media/Graphics/Logistics-hubPaper.jpg';
import ad from '../../public/Media/Graphics/GoogleRetarget.jpg';
import baobab from '../../public/Media/Graphics/baobab.jpg';
import whse from '../../public/Media/Graphics/123WHSE.jpg';
import narjol from '../../public/Media/Graphics/narjolcr.jpg';
import ltl from '../../public/Media/Graphics/webLTL.jpg';
import pdf2 from '../../public/Media/Graphics/PDF2.jpg';
import pdf3 from '../../public/Media/Graphics/PDF3.jpg';

export default class WorkGraphic extends React.Component {
    IMAGES = [
            {
            src: prairieLogo,
            thumbnail: prairieLogo,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "Prairie Turf Pros"
        },
        {
            src: prairieLogos,
            thumbnail: prairieLogos,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Prairie Turf Pros client options"
        },
        {
            src: whitfieldLogo,
            thumbnail: whitfieldLogo,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Whitfield Construction"
        },
        {
            src: shirtP1,
            thumbnail: shirtP1,
            thumbnailWidth: 220,
            thumbnailHeight: 174,
            caption: "Patriotic T-Shirt Design"
        },
        {
            src: shirtP2,
            thumbnail: shirtP2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Patriotic T-Shirt Design"
        },
        {
            src: logistics,
            thumbnail: logistics,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "Logistics Hub"
        },
        {
            src: lous,
            thumbnail: lous,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "Lou's Hobby Shop"
        },
        {
            src: learn,
            thumbnail: learn,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Freight Guru Master Plan"
        },
        {
            src: moving,
            thumbnail: moving,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Freight Hub Group Moving"
        },
        {
            src: walk,
            thumbnail: walk,
            thumbnailWidth: 220,
            thumbnailHeight: 174,
            caption: "FIU Walk-A-Thon Fundraising Event"
        },
        {
            src: nature,
            thumbnail: nature,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Naturezone Trading Logo"
        },
        {
            src: logistics,
            thumbnail: logistics,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "Logistics Hub"
        },
        {
            src: port,
            thumbnail: port,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Freight Hub Group Guide to Freight Shipping FL"
        },
        {
            src: ad,
            thumbnail: ad,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Freight Hub Group Ad"
        },
        {
            src: baobab,
            thumbnail: baobab,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Naturezone Trading Baobab Product"
        },
        {
            src: whse,
            thumbnail: whse,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "WHSE Hub"
        },
        {
            src: narjol,
            thumbnail: narjol,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Narjol Cibreiro Realty"
        },
        {
            src: ltl,
            thumbnail: ltl,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "LTL Hub Website Graphics"
        },
        {
            src: pdf2,
            thumbnail: pdf2,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "Freight Hub Group PDF"
        },
        {
            src: pdf3,
            thumbnail: pdf3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Freight Hub Group PDF"
        }
    ];
    
    render = () => (
        <div className="work-graphic"><Gallery images={this.IMAGES} /></div>

        
    );
}


