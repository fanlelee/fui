import React from 'react';
import Demo from '../../demo'
import IconExample from './icon.example';
import Icon from './icon';
import './icon.demo.scss'

const IconDemo: React.FunctionComponent = () => {
    return (<>
        <Demo code={require(`!!raw-loader!./icon.example`).default}>
            <IconExample/>
        </Demo>
        <ul className='ul-icon-demo'>
            <li> <Icon name='add'/><span>add</span></li>
            <li> <Icon name='add-account'/><span>add-account</span></li>
            <li> <Icon name='all'/><span>all</span></li>
            <li> <Icon name='arrow-left'/><span>arrow-left</span></li>
            <li> <Icon name='business-man'/><span>business-man</span></li>
            <li> <Icon name='clock'/><span>clock</span></li>
            <li> <Icon name='close'/><span>close</span></li>
            <li> <Icon name='code'/><span>code</span></li>
            <li> <Icon name='copy'/><span>copy</span></li>
            <li> <Icon name='dollar'/><span>dollar</span></li>
            <li> <Icon name='falling'/><span>falling</span></li>
            <li> <Icon name='good-fill'/><span>good-fill'</span></li>
            <li> <Icon name='left-button'/><span>left-button</span></li>
            <li> <Icon name='loading'/><span>loading</span></li>
            <li> <Icon name='map'/><span>map</span></li>
            <li> <Icon name='play-fill'/><span>play-fill</span></li>
            <li> <Icon name='qrcode'/><span>qrcode</span></li>
            <li> <Icon name='sami-select'/><span>sami-select</span></li>
            <li> <Icon name='add-select'/><span>add-select</span></li>
            <li> <Icon name='vip'/><span>vip</span></li>
            <li> <Icon name='warning'/><span>warning</span></li>
            <li> <Icon name='download'/><span>download</span></li>
            <li> <Icon name='vip'/><span>vip</span></li>
            <li> <Icon name='scanning'/><span>scanning</span></li>
            <li> <Icon name='password'/><span>password</span></li>
            <li> <Icon name='history'/><span>history</span></li>
            <li> <Icon name='link'/><span>link</span></li>
        </ul>


    </>);
};

export default IconDemo;