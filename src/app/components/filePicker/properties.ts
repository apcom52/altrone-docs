import {ComponentDescription} from "@/types/ComponentProperties";

export const FilePickerProperties: ComponentDescription = {
  extends: 'React.InputHTMLAttributes<HTMLInputElement>',
  properties: [
    {
      name: 'defaultValue',
      type: 'FileItem[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Preuploaded files'
    },
    {
      name: 'autoUpload',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'When user chooses a new file then it is upload automatically to your server. You need to pass url, method, name to use default upload function or pass your own upload function via autoUploadFn'
    },
    {
      name: 'url',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Endpoint URL for automatic uploading'
    },
    {
      name: 'method',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Endpoint Method for automatic uploading'
    },
    {
      name: 'name',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of parameter in body content for automatic uploading'
    },
    {
      name: 'multiple',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Allows to upload more than 1 file'
    },
    {
      name: 'autoUploadFn',
      type: '(context: FilePickerUploadContext) => Promise<void>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom upload function'
    },
    {
      name: 'removeFileFn',
      type: '(context: FilePickerRemoveContext) => Promise<void>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom delete function'
    }
  ]
}

export const FilePickerUploadProperties: ComponentDescription = {
  properties: [
    {
      name: 'file',
      required: true,
      type: 'File',
      defaultValue: 'undefined',
      version: 30,
      description: 'File item'
    },
    {
      name: 'pickerItem',
      required: true,
      type: 'FileItem',
      defaultValue: 'undefined',
      version: 30,
      description: 'Instance of FileItem for this file'
    },
    {
      name: 'startUploading',
      required: true,
      type: '() => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Use this function when you started the uploading'
    },
    {
      name: 'setProgress',
      required: true,
      type: '(uploadedBytes: number) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Use this function to set progress bar value'
    },
    {
      name: 'complete',
      required: true,
      type: '() => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Use this function when uploading has finished successfully'
    },
    {
      name: 'fail',
      required: true,
      type: '(errorMessage?: string) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Use this function when uploading has finished with error'
    },
    {
      name: 'url',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Endpoint url'
    },
    {
      name: 'method',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Endpoint method'
    },
    {
      name: 'name',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Endpoint body content parameter name'
    },
  ]
}

export const FilePickerRemoveProperties: ComponentDescription = {
  properties: [
    {
      name: 'url',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Endpoint url'
    },
    {
      name: 'name',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Endpoint body content parameter name'
    },
    {
      name: 'pickerItem',
      required: true,
      type: 'FileItem',
      defaultValue: 'undefined',
      version: 30,
      description: 'Instance of FileItem for this file'
    },
    {
      name: 'file',
      type: 'File',
      defaultValue: 'undefined',
      version: 30,
      description: 'File item'
    },
  ]
}

export const FileItemProperties: ComponentDescription = {
  properties: [
    {
      name: 'filename',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of the file'
    },
  ]
}