<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    protected $fillable =["nombre","precioNormal"."precioMembrecia","peso","tipo"];
}
