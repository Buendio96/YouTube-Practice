import './styles/newStyle.css'
import './styles/style.scss'
import Page from '@models/page';

import WebpackLogo from '@assets/8BrPx64NFvs';
import xml from '@assets/data.xml'
import csv from '@assets/example.csv'

const newPost = new Page(`Today I am learning Webpack technology`, WebpackLogo)

newPost.init()
console.log("XML: ", xml)
console.log("XML: ", csv)