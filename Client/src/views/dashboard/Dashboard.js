import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCarouselItem,
  CCarousel,
  CCarouselInner,
  CCarouselIndicators,
  CCarouselControl,
  CCarouselCaption,
  CJumbotron,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import background from "src/image_3.png";
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'


const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  return (
    <>
      

      <CRow>
        <CCol>
        <CJumbotron>
       
      <h1 className="display-3">Bienvenue sur eRent</h1>
      <p className="lead"></p>
       <p>For more information visit website</p>
      <CButton color="primary" href="https://coreui.io/" target="_blank">More Info</CButton>
      
    </CJumbotron>
    <CJumbotron>
       
       <h1 className="display-3">Bienvenue sur eRent</h1>
       <p className="lead"></p>
        <p>For more information visit website</p>
       <CButton color="primary" href="https://coreui.io/" target="_blank">More Info</CButton>
       
     </CJumbotron>
     <div>
      <CRow>
      <CCard>
        <CCardHeader>
          About Us
        </CCardHeader>
        <CCardBody>
        <CCol sm={12}>
          <CCarousel activeIndex={activeIndex}>
            <CCarouselIndicators/>
            <CCarouselInner>
              <CCarouselItem>
                <img className="d-block w-100" src={background} alt="slide 1"/>
                <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" src={background} alt="slide 2"/>
                <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" src={background} alt="slide 3"/>
                <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
              </CCarouselItem>
            </CCarouselInner>
            <CCarouselControl direction="prev"/>
            <CCarouselControl direction="next"/>
          </CCarousel>
        </CCol>
        </CCardBody>
        </CCard>
      </CRow>
    </div>
        </CCol>
      </CRow>
     
    </>
  )
}

export default Dashboard
