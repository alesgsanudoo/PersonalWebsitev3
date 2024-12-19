"use client";

import * as React from 'react';

import {Viewer, Worker} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

const HomePage = () => {
    const layout = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
        renderToolbar: (Toolbar) => (
            <Toolbar>
                {(slots) => {
                    const {EnterFullScreen, Zoom, ZoomIn, ZoomOut, Download, Print} = slots;
                    return (
                        <div className="flex justify-between items-center w-full">
                            <div className="flex-1 flex justify-center items-center space-x-4">
                                <EnterFullScreen/>
                                <ZoomOut/>
                                <Zoom/>
                                <ZoomIn/>
                                <Print/>
                                <Download/>
                            </div>
                        </div>
                    );
                }}
            </Toolbar>
        ),
    });

    return (
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
            <div
                style={{}}
            >
                <Viewer theme='dark' fileUrl="/resume.pdf" plugins={[layout]}/>
            </div>
        </Worker>
    );
};

export default HomePage;