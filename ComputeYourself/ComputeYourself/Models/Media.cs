﻿using System.ComponentModel.DataAnnotations;

namespace ComputeYourself.Models
{
    public class Media
    {
        [Key]
        public int Id { get; set; }

        public string MediaURL { get; set; }
    }
}