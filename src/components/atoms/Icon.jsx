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
import Clock from 'assets/icons/clock.svg';
import Close from 'assets/icons/close.svg';
import Cooking from 'assets/icons/cooking.svg';
import DotsVertical from 'assets/icons/dots-vertical.svg';
import ECGHeart from 'assets/icons/ecg-heart.svg';
import Edit from 'assets/icons/edit.svg';
import Filter from 'assets/icons/filter.svg';
import Fridge from 'assets/icons/fridge.svg';
import Home from 'assets/icons/home.svg';
import List from 'assets/icons/list.svg';
import MagnifyingGlass from 'assets/icons/magnifying-glass.svg';
import ShareFilled from 'assets/icons/share-filled.svg';
import ShareOutlined from 'assets/icons/share-outlined.svg';
import TrashX from 'assets/icons/trash-x.svg';
import Trash from 'assets/icons/trash.svg';
import Upload from 'assets/icons/upload.svg';
import UserCircle from 'assets/icons/user-circle.svg';


const Icon = ({ name = 'default', size = 100, color = 'white' }) => {

    switch (name) {

        case 'add':
            return (
                <View>
                    <Add color={color} width={size} height={size} />
                </View>
            );
        case 'arrow-back':
            return (
                <View>
                    <ArrowBack color={color} width={size} height={size} />
                </View>
            );
        case 'arrow-forward':
            return (
                <View>
                    <ArrowForward color={color} width={size} height={size} />
                </View>
            );
        case 'arrow-down':
            return (
                <View>
                    <ArrowDown color={color} width={size} height={size} />
                </View>
            );
        case 'arrow-long-left':
            return (
                <View>
                    <ArrowLongLeft color={color} width={size} height={size} />
                </View>
            );
        case 'bag':
            return (
                <View>
                    <Bag color={color} width={size} height={size} />
                </View>
            );
        case 'book':
            return (
                <View>
                    <Book color={color} width={size} height={size} />
                </View>
            );
        case 'calendar':
            return (
                <View>
                    <Calendar color={color} width={size} height={size} />
                </View>
            );
        case 'camera':
            return (
                <View>
                    <Camera color={color} width={size} height={size} />
                </View>
            );
        case 'clock':
            return (
                <View>
                    <Clock color={color} width={size} height={size} />
                </View>
            );
        case 'close':
            return (
                <View>
                    <Close color={color} width={size} height={size} />
                </View>
            );
        case 'cooking':
            return (
                <View>
                    <Cooking color={color} width={size} height={size} />
                </View>
            );
        case 'dots-vertical':
            return (
                <View>
                    <DotsVertical color={color} width={size} height={size} />
                </View>
            );
        case 'ecg-heart':
            return (
                <View>
                    <ECGHeart color={color} width={size} height={size} />
                </View>
            );
        case 'edit':
            return (
                <View>
                    <Edit color={color} width={size} height={size} />
                </View>
            );
        case 'filter':
            return (
                <View>
                    <Filter color={color} width={size} height={size} />
                </View>
            );
        case 'fridge':
            return (
                <View>
                    <Fridge color={color} width={size} height={size} />
                </View>
            );
        case 'hash':
            return (
                <View>
                    <Hash color={color} width={size} height={size} />
                </View>
            );
        case 'home':
            return (
                <View>
                    <Home color={color} width={size} height={size} />
                </View>
            );
        case 'list':
            return (
                <View>
                    <List color={color} width={size} height={size} />
                </View>
            );
        case 'magnifying-glass':
            return (
                <View>
                    <MagnifyingGlass color={color} width={size} height={size} />
                </View>
            );
        case 'share-filled':
            return (
                <View>
                    <ShareFilled color={color} width={size} height={size} />
                </View>
            );
        case 'share-outlined':
            return (
                <View>
                    <ShareOutlined color={color} width={size} height={size} />
                </View>
            );
        case 'trash-x':
            return (
                <View>
                    <TrashX color={color} width={size} height={size} />
                </View>
            );
        case 'trash':
            return (
                <View>
                    <Trash color={color} width={size} height={size} />
                </View>
            );
        case 'upload':
            return (
                <View>
                    <Upload color={color} width={size} height={size} />
                </View>
            );
        case 'user-circle':
            return (
                <View>
                    <UserCircle color={color} width={size} height={size} />
                </View>
            );
        default:
            return (
                <View>
                    <Fridge color={color} width={size} height={size} />
                </View>
            );
    }
};

export default Icon;