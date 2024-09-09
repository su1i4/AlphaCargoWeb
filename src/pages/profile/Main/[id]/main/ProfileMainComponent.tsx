import styled from "@emotion/styled";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../../../../components/atoms/UI/Inputs";
import { PrimaryButtonStyled } from "../../../../../components/atoms/UI/Buttons";
import { ErrorText } from "../../../../../components/atoms/UI/Text";
import { useNavigate } from "react-router-dom";
import { FormField } from "../../../../../components/atoms/UI/Block";
import { useAppDispatch } from "../../../../../hooks/useAppDisptach";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { getUserInformationThunk } from "../../../../../store/thunk/system.thunk";
import {
  getIdInLocalStorage,
  getTokenInLocalStorage,
} from "../../../../../utlis/getTokenLocal";
import { instance } from "../../../../../api/instance.axios";
import useValidPhone from "../../../../../hooks/useValidPhone";

interface IFormInput {
  fullName: string;
  phoneNumber: string;
  newPassword: string;
  repeatPassword: string;
  email: string;
}

const ProfileMainComponent = () => {
  const user = useTypedSelector((state) => state.system.user);
  const { control, handleSubmit, reset, getValues, register } =
    useForm<IFormInput>({
      defaultValues: {
        fullName: "",
        phoneNumber: "",
        newPassword: "",
        repeatPassword: "",
        email: "",
      },
      mode: "onTouched",
    });

  const formData = getValues();

  const { useFormatRef, onPhoneInput, onPhoneKeyDown, onPhonePaste } =
    useValidPhone(formData.phoneNumber && formData.phoneNumber);

  const [repeatPasswordCheck, setRepeatPasswordCheck] = useState<string | null>(
    null
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: IFormInput) => {
    if (
      data.email &&
      data.fullName &&
      data.phoneNumber &&
      data.newPassword &&
      data.repeatPassword
    ) {
      if (data.newPassword !== data.repeatPassword) {
        setRepeatPasswordCheck("Пароль не правильный");
      } else {
        try {
          await instance
            .patch(
              `/users/${getIdInLocalStorage()}`,
              {
                password: data.newPassword,
                fio: data.fullName,
                phone: data.phoneNumber,
              },
              {
                headers: {
                  Authorization: `Bearer ${getTokenInLocalStorage()}`,
                },
              }
            )
            .then((res) => {
              if (res) {
                navigate("/profile/main");
                dispatch(
                  getUserInformationThunk()
                );
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  useEffect(() => {
    if (user) {
      dispatch(getUserInformationThunk());
    }
  }, [dispatch, getIdInLocalStorage]);

  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fio || "",
        phoneNumber: user.phone || "",
        newPassword: "",
        repeatPassword: "",
        email: user.email || "",
      });
    }
  }, [user]);

  console.log(user)

  return (
    <div className="profile_main-change">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Controller
            name="fullName"
            control={control}
            rules={{ required: "ФИО обязательно для заполнения" }}
            render={({ field, fieldState }) => (
              <>
                <InputStyled {...field} type="text" placeholder="ФИО" />
                {fieldState.error && (
                  <ErrorText style={{ margin: "0" }}>
                    {fieldState.error.message}
                  </ErrorText>
                )}
              </>
            )}
          />
        </FormField>

        <FormField>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "Номер телефона обязателен для заполнения" }}
            render={({ field, fieldState }) => (
              <>
                <InputStyled
                  {...field}
                  {...register("phoneNumber")}
                  type="text"
                  placeholder="Номер телефона"
                  value={useFormatRef.current}
                  minLength={0}
                  maxLength={20}
                  onInput={onPhoneInput}
                  onKeyDown={onPhoneKeyDown}
                  onPaste={onPhonePaste}
                />
                {fieldState.error && (
                  <ErrorText style={{ margin: "0" }}>
                    {fieldState.error.message}
                  </ErrorText>
                )}
              </>
            )}
          />
        </FormField>

        <FormField>
          <Controller
            name="newPassword"
            control={control}
            rules={{ required: "Новый пароль обязателен" }}
            render={({ field, fieldState }) => (
              <>
                <InputStyled
                  {...field}
                  type="password"
                  placeholder="Новый пароль"
                  white
                />
                {fieldState.error && (
                  <ErrorText style={{ margin: "0" }}>
                    {fieldState.error.message}
                  </ErrorText>
                )}
              </>
            )}
          />
        </FormField>

        <FormField>
          <Controller
            name="repeatPassword"
            control={control}
            rules={{ required: "Повторите пароль" }}
            render={({ field, fieldState }) => (
              <>
                <InputStyled
                  {...field}
                  type="password"
                  placeholder="Повторите пароль"
                  white
                />
                {fieldState.error && (
                  <ErrorText style={{ margin: "0" }}>
                    {fieldState.error.message}
                  </ErrorText>
                )}

                {repeatPasswordCheck && (
                  <ErrorText style={{ margin: "0" }}>
                    {repeatPasswordCheck}
                  </ErrorText>
                )}
              </>
            )}
          />
        </FormField>

        <FormField>
          <div className="subtitle-block" style={{ marginBottom: "1.2rem" }}>
            Email
          </div>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email обязателен для заполнения" }}
            render={({ field, fieldState }) => (
              <>
                <InputStyled
                  {...field}
                  type="email"
                  placeholder="Почта"
                  white
                />
                {fieldState.error && (
                  <ErrorText style={{ margin: "0" }}>
                    {fieldState.error.message}
                  </ErrorText>
                )}
              </>
            )}
          />
        </FormField>

        <PrimaryButtonStyled type="submit">
          Сохранить изменения
        </PrimaryButtonStyled>
      </form>
    </div>
  );
};

const InputStyled = styled(Input)<{ white?: boolean }>`
  background-color: #e1e1e1;

  &::placeholder {
    color: #000;
  }

  ${(props) =>
    props.white &&
    `
  background-color: #fff;
  color: #000;

  &::placeholder {
    color: #8C8C8C;
  }
  `}

  margin-bottom: 1rem;

  width: 100%;
  max-width: 460px;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

export default ProfileMainComponent;
