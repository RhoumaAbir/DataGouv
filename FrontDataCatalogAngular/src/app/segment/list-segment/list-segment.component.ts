import { Component } from '@angular/core';
import { Segment } from '../../model/segment';
import { SegmentService } from 'src/app/services/segment.service';
@Component({
  selector: 'app-list-segment',
  templateUrl: './list-segment.component.html',
  styleUrls: ['./list-segment.component.css']
})
export class ListSegmentComponent {
  segments:Segment[]=[];
  typeOperationOptions: any[] = [];
  constructor(private segmentService: SegmentService) { }
  ngOnInit(): void { 
    console.log('ngunit is calleed ')
    this.getAllSegment(); 
    } 
    getAllSegment(): void {
      this.segmentService.getAllSegments().subscribe(
        (data) => {
          this.segments = data;
          console.log("List of segments:", this.segments);
        },
        (error) => {
          console.error('Error fetching segment data:', error);
          // Handle error if needed
        }
      );
    }
  
    deleteSegment(id: number | undefined): void {
      const isConfirmed = confirm('Are you sure you want to delete this segment?');
      if (isConfirmed && id !== undefined && id !== null) {
        this.segmentService.deleteSegment(id).subscribe(() => {
          console.log('Segment deleted successfully');
          this.getAllSegment();
        });
      }
    }
  }