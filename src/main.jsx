import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
    {
        id:1,
        content: 'HTML is easy',
        important: true
    },
    {
        id: 2,
        content: 'Browswer can only execute Javascript',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        important: true
    },
    {
        id: 4,
        content: 'JSAON server acts like a mock server without a real backend server to serve API endpoints',
        important: false
    },
    {
        id: 5,
        content: 'CRUD with React with routers, useState, useReducers, useContext, useRef hooks axios',
        important: true
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App  notes ={notes} />);