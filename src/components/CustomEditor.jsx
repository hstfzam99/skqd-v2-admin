import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';
import { useController } from 'react-hook-form';

// props: name, control
export const CustomEditor = (props) => {
    const { field, fieldState } = useController(props.formProps);
    const { value, onChange } = field;

    console.log({value})
    return (
        <SunEditor
            onChange={onChange}
            // lang="en"
            // autoFocus={true}
            // placeholder="Please type here..."
            width="100%"
            height="100%"
            setOptions={{
                buttonList: [
                    [
                        'bold',
                        'underline',
                        'table',
                        'image',
                        'video',
                        'audio',
                        'codeView',
                        'preview',
                        'save',
                    ],
                ],
            }}
            {...props.sunEditorProps}
            defaultValue={value}
        />
    )
}