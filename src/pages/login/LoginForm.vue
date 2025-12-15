<script setup lang="ts">
import ButtonNeo from '@/components/ui/buttonNeomorphic/ButtonNeo.vue';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import Field from '@/components/ui/field/Field.vue';
import FieldError from '@/components/ui/field/FieldError.vue';
import FieldLabel from '@/components/ui/field/FieldLabel.vue';
import Input from '@/components/ui/input/Input.vue';
import type { LoginBody } from '@/types/LoginBody';
import { useForm } from '@tanstack/vue-form';
import * as v from 'valibot';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

const router = useRouter();

const schema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.string(),
} satisfies Record<keyof LoginBody, any>);

const form = useForm({
  defaultValues: {
    email: '',
    password: '',
  } satisfies LoginBody,
  validators: {
    onSubmit: schema,
  },

  onSubmit() {
    toast.success('Вход выполнен!');
    router.push({ path: '/' });
  },
});

function isInvalid(field: any) {
  return field.state.meta.isTouched && !field.state.meta.isValid;
}
</script>

<template>
  <Card class="w-fit m-auto">
    <CardHeader>Войти</CardHeader>
    <CardContent>
      <form @submit.prevent="form.handleSubmit" class="flex flex-col gap-4">
        <form.Field name="email">
          <template #default="{ field }">
            <Field :data-invalid="isInvalid(field)">
              <FieldLabel :for="field.name"> Email </FieldLabel>
              <Input
                :id="field.name"
                :name="field.name"
                :model-value="field.state.value"
                :aria-invalid="isInvalid(field)"
                placeholder="Введите email"
                autocomplete="off"
                @blur="field.handleBlur"
                @input="field.handleChange($event.target.value)"
              />
              <FieldError
                v-if="isInvalid(field)"
                :errors="field.state.meta.errors"
              />
            </Field>
          </template>
        </form.Field>

        <form.Field name="password">
          <template #default="{ field }">
            <Field :data-invalid="isInvalid(field)">
              <FieldLabel :for="field.name"> Пароль </FieldLabel>
              <Input
                type="password"
                :id="field.name"
                :name="field.name"
                :model-value="field.state.value"
                :aria-invalid="isInvalid(field)"
                placeholder="Введите пароль"
                autocomplete="off"
                @blur="field.handleBlur"
                @input="field.handleChange($event.target.value)"
              />
              <FieldError
                v-if="isInvalid(field)"
                :errors="field.state.meta.errors"
              />
            </Field>
          </template>
        </form.Field>

        <ButtonNeo> Войти</ButtonNeo>
      </form>
    </CardContent>
  </Card>
</template>
