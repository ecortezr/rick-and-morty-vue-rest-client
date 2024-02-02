import { ref, watchEffect, toValue, type Ref } from 'vue'

export function useReactiveFetch<T>(url: string | Ref | Function) {
    const data = ref<T>();
    const error = ref();
    
    if (!url || !toValue(url))
        error.value = new Error('Empty URL');

    const fetchData = () => {
        data.value = undefined;
        error.value = null;

        fetch(toValue(url))
            .then((res) => res.json())
            .then((json) => data.value = json as T)
            .catch((err) => error.value = err);
    }

    watchEffect(() => {
        fetchData();
    })

    return { data, error };
}