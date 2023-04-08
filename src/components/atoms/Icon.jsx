import React from 'react';
import { View } from 'react-native';

import Add from 'assets/icons/add.svg';
import ArrowBack from 'assets/icons/arrow-back.svg';
import ArrowForward from 'assets/icons/arrow-forward.svg';
import ArrowDown from 'assets/icons/arrow-down.svg';
import ArrowLongLeft from 'assets/icons/arrow-long-left.svg';
import Bag from 'assets/icons/bag.svg';
import Book from 'assets/icons/book.svg';
import Calendar from 'assets/icons/calendar.svg';
import Camera from 'assets/icons/camera.svg';
import CheckCircle from 'assets/icons/check-circle.svg';
import Circle from 'assets/icons/circle.svg';
import Clock from 'assets/icons/clock.svg';
import Close from 'assets/icons/close.svg';
import Cooking from 'assets/icons/cooking.svg';
import DotsVertical from 'assets/icons/dots-vertical.svg';
import ECGHeart from 'assets/icons/ecg-heart.svg';
import Edit from 'assets/icons/edit.svg';
import Filter from 'assets/icons/filter.svg';
import Fridge from 'assets/icons/fridge.svg';
import Heart from 'assets/icons/heart.svg';
import HeartFilled from 'assets/icons/heart-filled.svg';
import Hash from 'assets/icons/hash.svg';
import Home from 'assets/icons/home.svg';
import List from 'assets/icons/list.svg';
import MagnifyingGlass from 'assets/icons/magnifying-glass.svg';
import ShareFilled from 'assets/icons/share-filled.svg';
import ShareOutlined from 'assets/icons/share-outlined.svg';
import TrashX from 'assets/icons/trash-x.svg';
import Trash from 'assets/icons/trash.svg';
import Upload from 'assets/icons/upload.svg';
import UserCircle from 'assets/icons/user-circle.svg';
import XBold from 'assets/icons/x-bold.svg';


const Icon = ({ name = 'default', size = 100, color = 'white' }) => {

    const icons = {
        'add': Add,
        'arrow-back': ArrowBack,
        'arrow-forward': ArrowForward,
        'arrow-down': ArrowDown,
        'arrow-long-left': ArrowLongLeft,
        'bag': Bag,
        'book': Book,
        'calendar': Calendar,
        'camera': Camera,
        'check-circle': CheckCircle,
        'circle': Circle,
        'clock': Clock,
        'close': Close,
        'cooking': Cooking,
        'dots-vertical': DotsVertical,
        'ecg-heart': ECGHeart,
        'edit': Edit,
        'filter': Filter,
        'fridge': Fridge,
        'heart': Heart,
        'heart-filled': HeartFilled,
        'hash': Hash,
        'home': Home,
        'list': List,
        'magnifying-glass': MagnifyingGlass,
        'share-filled': ShareFilled,
        'share-outlined': ShareOutlined,
        'trash-x': TrashX,
        'trash': Trash,
        'upload': Upload,
        'user-circle': UserCircle,
        'default': Home,
        'x-bold': XBold,

    };

    const IconComponent = icons[name] || icons.default;

    return (
        <View>
            <IconComponent color={color} width={size} height={size} />
        </View>
    );

};

export default Icon;