<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'       => $this->id,
            'name'     => $this->name,
            'year'     => (int)$this->year,
            'synopsis'  => $this->synopsis,
            'seasons'  => (int)$this->seasons,
            'producer' => $this->producer,
            'type'     => $this->type,
        ];
    }
}
