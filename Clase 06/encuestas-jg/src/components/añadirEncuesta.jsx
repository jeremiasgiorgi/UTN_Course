import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CrearEncuesta = ({ agregarEncuesta }) => {
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });
  const navigate = useNavigate();
  let preguntaIdCounter = 1; // Contador para IDs de preguntas

  const onSubmit = (data) => {
    const nuevaEncuesta = {
      title: data.title,
      questions: data.questions.map((question, index) => ({
        id: preguntaIdCounter++, // Asignar un ID único a cada pregunta
        question: question.question,
        options: question.options.split('\n').map((option) => ({
          id: index + 1, // Asignar un ID único a cada opción dentro de una pregunta
          value: option.trim(),
        })),
      })),
    };

    agregarEncuesta(nuevaEncuesta);
    navigate('/encuestas');
  };

  return (
    <div>
      <h1>Crear Nueva Encuesta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          {...register("title", {
            required: 'Este campo es obligatorio',
            maxLength: { value: 50, message: 'El título debe tener menos de 50 caracteres' }
          })}
        />
        {errors.title && <p>{errors.title.message}</p>}

        {fields.map((question, index) => (
          <div key={question.id}>
            <label>Pregunta:</label>
            <input
              type="text"
              name={`questions[${index}].question`}
              {...register(`questions[${index}].question`, {
                required: 'Este campo es obligatorio',
                maxLength: { value: 200, message: 'La pregunta debe tener menos de 200 caracteres' },
              })}
            />
            {errors.questions && <p>{errors.questions[index]?.question.message}</p>}

            <label>Opciones (una por línea):</label>
            <textarea
              name={`questions[${index}].options`}
              {...register(`questions[${index}].options`, {
                required: 'Este campo es obligatorio',
              })}
            />
            {errors.questions && <p>{errors.questions[index]?.options.message}</p>}

            <button type="button" onClick={() => remove(index)}>Eliminar Pregunta</button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ question: '', options: '' })}
        >
          Agregar Pregunta
        </button>

        <button type="submit">Guardar Encuesta</button>
      </form>
    </div>
  );
};

export default CrearEncuesta;