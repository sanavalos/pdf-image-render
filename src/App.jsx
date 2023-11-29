import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink} from '@react-pdf/renderer';
import logopng from './assets/logo.png';
import logojpg from './assets/logo.jpg';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    display: 'flex',
  },
  section: {
    margin: 5,
    flexGrow: 1
  },
  imageSection: {
   width: '80%',
   height: '250px',
 }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.imageSection}>
      <Text>Image below is a jpg</Text>
      <Image src={logojpg} />
    </View>
    <View style={styles.imageSection}>
      <Text>Image below is a png</Text>
      <Image src={logopng} />
    </View>
    <View style={styles.imageSection}>
      <Text>Image below is a png (link)</Text>
      <Image src={`https://fmanage-contracts.s3.amazonaws.com/assets/38991919-b72e-48ff-ad5f-eaf1304e1396/logo.png?AWSAccessKeyId=AKIA2MYBNBUJSF5MBKUZ&Signature=%2FcMb7QYA260gBvSeFHavT5zZrYk%3D&Expires=1701267665`} />
    </View>
    </Page>
  </Document>
);

function App() {
  return (
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
     <button style={{cursor:'pointer', backgroundColor:'#6C5431', borderRadius:'15px', height:'150px', width:'350px', color:'#FFFFFF', fontSize:'30px', fontWeight:'bold'}}>
      Download PDF
     </button>
    </PDFDownloadLink>
  )
}

export default App
