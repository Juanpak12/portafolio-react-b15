import React from 'react';
import './index.scss';


const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/Juanpak12'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/juanpak12/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://wa.link/1wqybb'}
                type={'whatsapp'}
            />
            <SocialLinks.Link
                url={''}
                type={'tumblr'}
            />
        </div>

    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>;

export default SocialLinks;
