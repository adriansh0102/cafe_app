import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { CustomView } from '@/components/ui/CustomView'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import HeaderScreen from '@/components/screens/HeaderScreen'
import Input, { OnBlurProps, onChangeProps, OnFocusProps } from '@/components/ui/Input'
import { FormState, useForm } from '@/hooks/useForm'
import { AlertFunction, AlertFunctionMessage } from '@/functions/alert'
import dataBase from '@/hooks/api/baseDB'
import { createUserI } from '@/hooks/api/user/user.interface'
import Loading from '@/components/ui/Loading'

const inicialForm: FormState = {
  name: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'name',
    isFormValid: false,
    optionValid: {
      require: true
    }
  },
  las_name: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'las_name',
    isFormValid: false,
    optionValid: { require: true }
  },
  username: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'username',
    isFormValid: false,
    optionValid: { require: true }
  },
  password: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'password',
    isFormValid: false,
    optionValid: {
      require: true,
      minLength: 6,
      maxLength: 12
    }
  },
  rectifyPassword: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'rectifyPassword',
    isFormValid: false,
    optionValid: { require: true }
  },
  phone: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'phone',
    isFormValid: false,
    optionValid: { require: true }
  },
  email: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'email',
    isFormValid: false,
    optionValid: {
      require: true,
      minLength: 9

    }
  },
  rol: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'rol',
    isFormValid: false,
    optionValid: { require: true }
  },
}

export default function saveUser() {

  const { formState, onGhange, isFormValid } = useForm(inicialForm);
  const [isloader, setIsloader] = useState<boolean>(false);

  const onHandleChange = ({ text, name, optionValid }: onChangeProps) => { onGhange({ text, name, optionValid }) }
  const onFocus = ({ }: OnFocusProps) => { console.log('focus') }
  const onBlur = ({ }: OnBlurProps) => { console.log('blur') }

  const saveUser = async (data: FormState) => {
    setIsloader(true);
    try {
      const a = await dataBase.post<createUserI>('/api/users', {
        name: data.name.value,
        last_name: data.las_name.value,
        phone: data.phone.value,
        email: data.email.value,
        username: data.username.value,
        rol: data.rol.value,
        password: data.password.value
      });
      setIsloader(false);
      AlertFunctionMessage({ title: 'Satisfactorio', msg: 'Se ha agregado el usuario correctamente' })
    } catch (error) {
      setIsloader(false);
      AlertFunction({ title: 'Error', msg: 'Ha ocurrido un error al agregar el usuario' })
    }
  }

  const onSubmitSaveUser = async (data: FormState) => {

    if (data.password.value != data.rectifyPassword.value) {
      AlertFunction({
        title: 'Error', msg: 'La Contraseña no coincide', onPressOk: () => { }
      })
    } else {
      saveUser(data);
    }
  }

  return (
    <>
      <HeaderScreen title='Adicionar Usuario' />
      {
        isloader ?
          <Loading />
          :
          <ScrollView >
            <CustomView >
              <Card>
                <Input
                  placeholder={'Nombre'}
                  value={formState.name.value}
                  name={formState.name.name}
                  text='Introduce en Nombre'
                  onChange={onHandleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  error={formState.name.error}
                  hasError={formState.name.hasError}
                  active={formState.name.active}
                  optionValid={formState.name.optionValid}
                />

                <Input
                  placeholder={'Apellidos'}
                  value={formState.las_name.value}
                  name={formState.las_name.name}
                  text='Introduce los Apellidos'
                  onChange={onHandleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  error={formState.las_name.error}
                  hasError={formState.las_name.hasError}
                  active={formState.las_name.active}
                  optionValid={formState.las_name.optionValid}
                />

                <Input
                  placeholder={'Nombre de Usuario'}
                  value={formState.username.value}
                  name={formState.username.name}
                  text='Introduce el Nombre de Usuario'
                  onChange={onHandleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  error={formState.username.error}
                  hasError={formState.username.hasError}
                  active={formState.email.active}
                  optionValid={formState.username.optionValid}
                />

                <Input
                  placeholder={'55555555'}
                  value={formState.phone.value}
                  name={formState.phone.name}
                  text='Introduce el Número de Telefono'
                  onChange={onHandleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  error={formState.phone.error}
                  hasError={formState.phone.hasError}
                  active={formState.phone.active}
                  optionValid={formState.phone.optionValid}
                  keyboardType={'name-phone-pad'}
                />

                <Input
                  placeholder={'********'}
                  value={formState.password.value}
                  name={formState.password.name}
                  text='Introduce la Contraseña'
                  onChange={onHandleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  error={formState.password.error}
                  hasError={formState.password.hasError}
                  active={formState.password.active}
                  optionValid={formState.password.optionValid}
                />

                <Input
                  placeholder={'********'}
                  value={formState.rectifyPassword.value}
                  name={formState.rectifyPassword.name}
                  text='Rectifica la Contraseña'
                  onChange={onHandleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  error={formState.rectifyPassword.error}
                  hasError={formState.rectifyPassword.hasError}
                  active={formState.rectifyPassword.active}
                  optionValid={formState.rectifyPassword.optionValid}
                />

                <Input
                  placeholder={'juan@gmail.com'}
                  value={formState.email.value}
                  name={formState.email.name}
                  text='Introduce el Correo Electrónico'
                  onChange={onHandleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  error={formState.email.error}
                  hasError={formState.email.hasError}
                  active={formState.email.active}
                  optionValid={formState.email.optionValid}
                />

                <Input
                  placeholder={'rol'}
                  value={formState.rol.value}
                  name={formState.rol.name}
                  text='Selecciona el Rol'
                  onChange={onHandleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  error={formState.rol.error}
                  hasError={formState.rol.hasError}
                  active={formState.rol.active}
                  optionValid={formState.rol.optionValid}
                />

                <Button
                  style={{ margin: 8 }}
                  text={'Agregar Usuario'}
                  disabled={isFormValid}
                  onPress={() => onSubmitSaveUser(formState)}
                />
              </Card>
              <View style={{ height: 20 }} />
            </CustomView>
          </ScrollView>
      }
    </>
  )
}
