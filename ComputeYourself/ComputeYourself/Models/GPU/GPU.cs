using System.ComponentModel.DataAnnotations;
using ComputeYourself.Data.Base;
using ComputeYourself.Data.Enums;
using ComputeYourself.Data.Enums.GPU;

namespace ComputeYourself.Models.GPU
{
    public class GPU : IEntityBase
    {
        public int Id { get; set; }

        [Display(Name = "GPU name")]
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Display(Name = "Description")]
        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }

        [Display(Name = "Price")]
        [Required(ErrorMessage = "Price is required")]
        public decimal Price { get; set; }

        [Display(Name = "Brand")]
        [Required(ErrorMessage = "Brand is required")]
        public ManuFacturerBrand Brand { get; set; }

        [Display(Name = "Warranty")]
        [Required(ErrorMessage = "Warranty is required")]
        public int Warranty { get; set; }

        [Display(Name = "Rating")]
        [Required(ErrorMessage = "Rating is required")]
        public float Rating { get; set; }

        [Display(Name = "VideoChipset")]
        [Required(ErrorMessage = "VideoChipset is required")]
        public VideoChipsets VideoChipset { get; set; }

        [Display(Name = "VramSize")]
        [Required(ErrorMessage = "VramSize is required")]
        public int VramSize { get; set; }

        [Display(Name = "VramType")]
        [Required(ErrorMessage = "VramType is required")]
        public VramTypes VramType { get; set; }

        [Display(Name = "RequiredPSU")]
        [Required(ErrorMessage = "RequiredPSU is required")]
        public int RequiredPSU { get; set; }

        [Display(Name = "Length")]
        [Required(ErrorMessage = "Length is required")]
        public int Length { get; set; }

        //Relationships
        public List<Gpu_Media>? Gpu_Medias { get; set; }
    }
}