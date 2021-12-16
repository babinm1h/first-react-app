import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"

const ProfileSocials = ({ profile }) => {

    return (
        <div className="profile-data_socials">
            <div className="socials">
                <div className="socials_row">
                    <div className="socials_item">
                        <a href={profile.contacts.github} className="socials_link github" target="_blank" rel="noreferrer">
                            <AiFillGithub size={25} color="black" />
                        </a>
                    </div>
                    <div className="socials_item">
                        <a href={profile.contacts.vk} className="socials_link vk" target="_blank" rel="noreferrer">
                            VK
                        </a>
                    </div>
                    <div className="socials_item">
                        <a href={profile.contacts.github} className="socials_link" target="_blank" rel="noreferrer">
                            <AiOutlineTwitter size={25} color="black" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSocials;