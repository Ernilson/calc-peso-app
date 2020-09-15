import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    const imc2 = imc;
    const imc3 = imc;
    
    if(imc > 18.6){ alert('Você esta abaixo do peso!' + imc.toFixed(2));
    }else if(imc2 >= 18.6 && imc2 < 24.9){alert(' peso ideal!' + imc2.toFixed(2));
    }else if(imc3 >= 24.9 && imc3 < 31.1){
      alert('Você esta acima do peso!' + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Calcule seu Peso</Text>

     <TextInput 
     style={styles.input}
     value={peso}
     onChangeText={ (peso) => setPeso(peso) }
     placeholder="Peso (kg)"
     keyboardType="numeric"
     />     

<TextInput 
     style={styles.input}
     value={altura}
     onChangeText={ (altura) => setAltura(altura) }
     placeholder="altura (mtrs)"
     keyboardType="numeric"
     />    

     <TouchableOpacity style={styles.button}
     onPress={handleSubmit}
     >
       <Text style={styles.buttonText}>Calcule</Text>
       </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  title:{
    textAlign: 'center',
    marginTop:25,
    fontSize:30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding:15,
    color: '#FFF',
    fontSize: 23
  },
  button:{
    justifyContent: 'center',
    alignItems:'center',
    margin:15,
    padding:15,
    backgroundColor:'#41Aef4',
    fontSize:20
  },
  buttonText:{
    color: '#FFF',
    fontSize: 25,
  }
});