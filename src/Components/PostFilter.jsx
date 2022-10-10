import React from 'react';
import {Input} from "./UI/input/Input";
import {Select} from "./UI/select/Select";

export const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <Input placeholder={'Поиск...'}
                   value={filter.query}
                   onChange={(e) => setFilter({...filter, query: e.currentTarget.value})}
            />


            <Select value={filter.sort}
                    onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
                    defaultValue={'Сортировка'}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
            />
        </div>
    );
}