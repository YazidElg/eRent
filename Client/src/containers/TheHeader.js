import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CInput,
  CFormGroup,
  CLabel,
  CButton,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CSelect,
  CRow,
  CSwitch
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Slider from "@material-ui/core/Slider";

// routes config
import routes from "../routes";

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from "./index";



const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };
  
  return (
    <CHeader withSubheader>
   
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Home</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">About Us</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-12">
          <CHeaderNavLink>Services</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-12">
          <CHeaderNavLink>Testiomonials</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-12">
          <CHeaderNavLink>Contact Us</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdownMssg />
        <TheHeaderDropdown />
      </CHeaderNav>
     
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard"
          >
            <CIcon name="cil-graph" alt="Dashboard" />
            &nbsp;Dashboard
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />
            &nbsp;Settings
          </CLink>
        </div>
      </CSubheader>
    <CCol xs="12">
      <CCard>
        <CCardBody>
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
          
               <h1>RECHERCHEZ VOTRE FUTUR APPART' PARMI 266 200 ANNONCES</h1>
                <div className="card-header-actions">
                  <CButton color="link" className="card-header-action btn-setting">
                    
                  </CButton>
                  <CButton 
                    color="link" 
                    className="card-header-action btn-minimize" 
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    
                  </CButton>
                  <CButton 
                    color="link" 
                    className="card-header-action btn-close" 
                    onClick={() => setShowElements(false)}
                  >
                    
                  </CButton>
                </div>
            
              <CCollapse show={collapsed} timeout={1000}>
              
                  <CForm className="form-horizontal">
                  <CFormGroup row>
                  <CCol >
                    <CInputGroup>
                    <CInput id="input3-group3" custom size="lg" name="input3-group3" placeholder="Univérsité, location ..." />
                    <CSelect custom size="lg" name="selectLg" id="selectLg">
                      <option value="mode">Mode</option>
                      <option value="location">Location</option>
                      <option value="colocation">Colocation</option>
                      
                    </CSelect>
                      
                      <CSelect custom size="lg" name="selectLg" id="selectLg">
                      <option value="0">Categorie</option>
                      <option value="1">Studio</option>
                      <option value="2">Appartement</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                    </CInputGroup>
                    
                  </CCol>
                 
                </CFormGroup>
                <div className="row">
                  <div className="col-md-6">
                    <div >
                      <span className="slide-title">Prix (dh)</span>
                      <Slider
                      
                       onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={0}
                        max={5000}
                        step={500}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div >
                      <span className="slide-title">Superficie (m²)</span>
                      <Slider
                       
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={0}
                        max={300}
                        step={10}
                      />
                    </div>
                  </div>
                </div>
                  </CForm>
                  <CButton type="submit" col="lg" color="warning">Rechercher </CButton>
                
                
              </CCollapse>
          
          </CFade>
          </CCardBody>
          </CCard>
        </CCol>
        
    </CHeader>
    
    
  );
};

export default TheHeader;