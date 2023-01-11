import { FiArrowLeft, FiX, FiPlus } from 'react-icons/fi'
import { Container, SideBar, Content } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'


export function CreateMovie() {
  
  return (
    <Container>
      <Header />
      <Content>
        
        <ButtonText title="Voltar" icon={FiArrowLeft}/>
            
            <h2 id='title'>Novo filme</h2>
            <div className='inputs'>
              <Input 
                placeholder='Título'
                type="text"
              />          
              <Input 
                placeholder='Sua nota (de 0 a 5)'
                type="text"
              />          
            </div>

            <TextArea placeholder="Observações"/>

            <h3>Marcadores</h3>
            <div className='tags'>
              <Tag title="React" icon={FiX} id="tag"/>
              <Tag title="Novo Marcador" icon={FiPlus} id="tagMarker"/>
            </div>
          
            <div className='buttons'>
              <Button id="btn-delete" title="Excluir filme"/>
              <Button title="Salvar alterações"/>
            </div>
            
          <SideBar />
          
      </Content>
        
    </Container>
  )
}