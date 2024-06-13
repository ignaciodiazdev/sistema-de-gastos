import { useForm } from 'react-hook-form'
import type { GastoForm } from '../types'


export const FormGasto = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<GastoForm>()
    console.log(errors)
    const onSubmitGasto = (data: GastoForm) => {
        console.log(data)
    }

    return (
        <form className="dark:text-white" onSubmit={handleSubmit(onSubmitGasto)}>
            <div>
                <label htmlFor="categoria">Categoría: </label>
                <select id="categoria" className="dark:text-black"
                    {...register('categoria',{required: "Es obligatorio seleccionar la categoría"})}
                >
                    <option value="" hidden>Seleccione una opción</option>
                    <option value="transporte">Transporte</option>
                    <option value="entretenimiento">Entretenimiento</option>
                    <option value="alimentacion">Alimentación</option>
                </select>
                <p>{errors.categoria?.message?.toString()}</p>
            </div>
            <div>
                <label htmlFor="fecha">Fecha:</label>
                <input type="date" id="fecha" className='dark:text-black'
                    {...register('fecha',{required: "Es obligatoria la fecha"})}
                />
                <p>{errors.fecha?.message?.toString()}</p>
            </div>
            <div>
                <label htmlFor="monto">Monto: </label>
                <input type="number" id='monto' className="dark:text-black" step="any"
                    {...register('monto', {
                        required: "Campo obligatorio", 
                        validate: value => value > 0 || "El número debe ser positivo"
                    })}
                />
                 <p>{errors.monto?.message?.toString()}</p>
            </div>
            <div>
                <label htmlFor="descripcion">Descripción: </label>
                <textarea id='descripcion' className="dark:text-black"
                    {...register('descripcion')}
                />
                 <p>{errors.descripcion?.message?.toString()}</p>
            </div>

            <button type="submit" className='p-3 bg-indigo-700 rounded-lg'>Registrar Gasto</button>
        </form>
    )
}
