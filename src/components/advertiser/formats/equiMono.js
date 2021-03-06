var React = require('react')
import { Table, Button, Message } from 'semantic-ui-react'
import { debug, dataURItoBlob } from '../../../lib'
import { ImgUploadColumn } from '../../imageUpload'

export class EquiMonoFormat extends React.Component {
    constructor(props) {
        super(props);
        this.onCreativeAddition = props.onCreativeAddition;
        this.state = {
            valid: true
        }
    }

    setFile = (file, label) => {
        const that = this;
        var oFReader = new FileReader();
        oFReader.readAsDataURL(file);
        oFReader.onload = function (oFREvent) {
            var image = new Image();
            image.src = oFREvent.target.result;

            image.onload = function () {
                console.info(this.height, this.width)
                if (this.height != 2048 || this.width != 4096) {
                    that.setState({ valid: false })
                } else {
                    that.state['imageData'] = oFREvent.target.result;
                    that.onCreativeAddition(dataURItoBlob(oFREvent.target.result));
                    that.setState(Object.assign({}, that.state, { valid: true }))
                }
            };
        };

    }

    setFileName = (label) => {
        return e => {
            this.setFile(e.target.files[0], label);
            const fileObject = {}
            fileObject[label] = e.target.files[0];
            this.setState(Object.assign({}, this.state, fileObject))
        };
    }


    render() {
        return (
            <div>
                <Table compact basic collapsing celled padded={false} style={{ padding: 0, margin: '0px auto' }}>
                    {this.state.valid ? '' :
                        <Message negative>
                            <Message.Header>Invalid Image Dimensions</Message.Header>
                            <p>Please upload a 4096x2048 Image</p>
                        </Message>}
                    <Table.Body>
                        <Table.Row textAlign='center'>
                            <ImgUploadColumn label="Creative" onImgFileChange={e => this.setFileName('top')(e)} src={this.state.imageData} height="150px" width="300px" />
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}